// Build step (runs before vite-ssg): snapshot every project's GitHub data into
// public/projects/<owner>/<repo>.json so project pages can be prerendered as real
// 200 pages, and write a sitemap that lists them.
// Set GITHUB_TOKEN to lift the 60 req/hour limit (CI passes the workflow token).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { REPO_SOURCES, fetchAllRepos, isExcludedRepo } from '../src/config.js';
import { fetchProjectData } from '../src/lib/project.js';
import { createSanitizer } from '../src/lib/sanitize.js';

const SITE = 'https://afaan.dev';
const publicDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public');
const outDir = path.join(publicDir, 'projects');

const headers = { 'User-Agent': 'afaan.dev-build' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const sanitize = createSanitizer(new JSDOM('').window);

const snapshot = async (repo) => {
    const data = await fetchProjectData(repo, { sanitize, headers });
    const file = path.join(outDir, `${repo.full_name}.json`);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(data));
};

// Small worker pool: fast, but gentle on GitHub.
const runPool = async (items, size, fn) => {
    const queue = [...items];
    await Promise.all(Array.from({ length: size }, async () => {
        while (queue.length) await fn(queue.shift());
    }));
};

const toSitemap = (urls) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

const run = async () => {
    fs.rmSync(outDir, { recursive: true, force: true });
    fs.mkdirSync(outDir, { recursive: true });

    let repos = [];
    try {
        repos = (await Promise.all(REPO_SOURCES.map((src) => fetchAllRepos(src, headers))))
            .flat()
            .filter((r) => !isExcludedRepo(r.name));
    } catch (err) {
        console.warn(`Projects: could not list repos (${err.message}). Project pages stay client-rendered.`);
    }

    const done = [];
    await runPool(repos, 8, async (repo) => {
        try {
            await snapshot(repo);
            done.push(repo);
        } catch (err) {
            console.warn(`Projects: skipped ${repo.full_name} (${err.message}).`);
        }
    });

    fs.writeFileSync(path.join(outDir, 'index.json'), JSON.stringify(done.map((r) => r.full_name).sort()));

    const urls = [
        { loc: `${SITE}/`, changefreq: 'weekly', priority: '1.0' },
        { loc: `${SITE}/privacy`, changefreq: 'yearly', priority: '0.3' },
        ...done.map((r) => ({
            loc: `${SITE}/project/${r.full_name}`,
            lastmod: r.pushed_at?.slice(0, 10),
            changefreq: 'monthly',
            priority: '0.6',
        })),
    ];
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), toSitemap(urls));
    console.log(`Projects: snapshotted ${done.length}/${repos.length} repos; sitemap has ${urls.length} URLs.`);
};

run();
