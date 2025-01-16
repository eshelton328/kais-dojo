import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src_path = path.join(__dirname, '..', 'src');

function clearDirectory(directory) {
    if (!fs.existsSync(directory)) {
        return;
    }

    const items = fs.readdirSync(directory);

    for (const item of items) {
        // Skip the __tests__ directory
        if (item === '__tests__') {
            continue;
        }

        const itemPath = path.join(directory, item);
        if (fs.lstatSync(itemPath).isDirectory()) {
            clearDirectory(itemPath);
            // Only remove directory if it's empty and not __tests__
            if (fs.readdirSync(itemPath).length === 0) {
                fs.rmdirSync(itemPath);
            }
        } else {
            fs.unlinkSync(itemPath);
        }
    }
}

clearDirectory(src_path);
console.log('Cleared src directory (preserved test files)');
