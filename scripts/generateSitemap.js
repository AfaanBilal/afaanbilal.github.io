import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ALLOWED_OWNERS, isExcludedRepo } from '../src/config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = 'https://afaan.dev';
const distDir = path.resolve(__dirname, '../dist');
const outFile = path.join(distDir, 'sitemap.xml');

// Map allowed owner slugs to their GitHub repos endpoint.
const OWNER_ENDPOINTS = {
    afaanbilal: 'https://api.github.com/users/AfaanBilal/repos?per_page=100&sort=pushed',
    'amx-infinity': 'https://api.github.com/orgs/AMX-Infinity/repos?per_page=100&sort=pushed',
};

const staticUrls = [
    { loc: `${SITE}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${SITE}/privacy`, changefreq: 'yearly', priority: '0.3' },
];

const fetchOwnerRepos = async (owner) => {
    const endpoint = OWNER_ENDPOINTS[owner];
    if (!endpoint) {
        console.warn(`Sitemap: no GitHub endpoint mapped for allowed owner "${owner}" — its project pages are omitted. Add it to OWNER_ENDPOINTS.`);
        return [];
    }
    const res = await fetch(endpoint, { headers: { 'User-Agent': 'afaan.dev-sitemap' } });
    if (!res.ok) throw new Error(`GitHub API ${res.status} for ${owner}`);
    const repos = await res.json();
    if (!Array.isArray(repos)) throw new Error('Unexpected GitHub response');
    // Mirror what OpenSource.vue actually renders: everything except excluded repos
    // (forks included), so the sitemap and the live page set stay in agreement.
    return repos
        .filter((repo) => !isExcludedRepo(repo.name))
        .map((repo) => ({
            loc: `${SITE}/project/${encodeURIComponent(repo.full_name)}`,
            lastmod: repo.pushed_at ? repo.pushed_at.slice(0, 10) : undefined,
            changefreq: 'monthly',
            priority: '0.6',
        }));
};

const fetchRepos = async () => {
    const perOwner = await Promise.all(ALLOWED_OWNERS.map(fetchOwnerRepos));
    return perOwner.flat();
};

const toXml = (urls) => {
    const body = urls.map((u) => {
        const parts = [`    <loc>${u.loc}</loc>`];
        if (u.lastmod) parts.push(`    <lastmod>${u.lastmod}</lastmod>`);
        if (u.changefreq) parts.push(`    <changefreq>${u.changefreq}</changefreq>`);
        if (u.priority) parts.push(`    <priority>${u.priority}</priority>`);
        return `  <url>\n${parts.join('\n')}\n  </url>`;
    }).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
};

const run = async () => {
    let urls = [...staticUrls];
    try {
        const projectUrls = await fetchRepos();
        urls = [...staticUrls, ...projectUrls];
        console.log(`Sitemap: included ${projectUrls.length} project pages.`);
    } catch (err) {
        console.warn(`Sitemap: could not fetch repos (${err.message}). Writing static routes only.`);
    }
    if (!fs.existsSync(distDir)) {
        console.error('Error: dist/ not found. Run the build first.');
        process.exit(1);
    }
    fs.writeFileSync(outFile, toXml(urls), 'utf8');
    console.log(`Sitemap written to ${outFile} (${urls.length} URLs).`);
};

run();
