import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');

try {
    if (!fs.existsSync(indexHtml)) {
        console.error('Error: dist/index.html not found. Make sure the build completed.');
        process.exit(1);
    }

    // GitHub Pages serves 404.html for any path it can't find (all non-prerendered
    // SPA routes). vite-ssg prerendered dist/index.html with the full HOME markup —
    // copying that verbatim would make deep links (e.g. /project/x) paint the home
    // page and then hydrate-mismatch into the real route. Strip the prerendered
    // content to an empty #app so the fallback does a clean client-side mount.
    const html = fs.readFileSync(indexHtml, 'utf8');
    const shell = html.replace(/<div id="app"[^>]*>[\s\S]*<\/div>/, '<div id="app"></div>');

    if (!shell.includes('<div id="app"></div>')) {
        console.error('Error: could not locate #app root to build the 404 shell.');
        process.exit(1);
    }

    fs.writeFileSync(notFoundHtml, shell, 'utf8');
    console.log('Successfully wrote dist/404.html SPA shell (empty #app).');
} catch (error) {
    console.error('Error creating 404.html:', error);
    process.exit(1);
}
