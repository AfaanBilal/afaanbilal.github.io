import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtml = path.join(distDir, 'index.html');
const notFoundHtml = path.join(distDir, '404.html');

try {
    if (fs.existsSync(indexHtml)) {
        fs.copyFileSync(indexHtml, notFoundHtml);
        console.log('Successfully copied index.html to 404.html');
    } else {
        console.error('Error: dist/index.html not found. Make sure validation build completed.');
        process.exit(1);
    }
} catch (error) {
    console.error('Error copying file:', error);
    process.exit(1);
}
