import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function updateStats(config) {
    let stats;
    try {
        stats = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'stats.json'), 'utf8'));
    } catch(e) {
        stats = {};
    }

    // Traverse the config structure to update stats
    Object.entries(config).forEach(([category, subcategories]) => {
        Object.entries(subcategories).forEach(([subcategory, problems]) => {
            problems.forEach(problem => {
                if (problem.startsWith('//')) return; // Skip commented problems

                const key = `${category}/${subcategory}/${problem}`;
                stats[key] = (stats[key] || 0) + 1;
            });
        });
    });

    fs.writeFileSync(
        path.join(__dirname, '..', 'stats.json'),
        JSON.stringify(stats, null, 4)
    );
}

export function updatePackageJson(activeProblems) {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    // Create test pattern for each active problem
    const testPattern = activeProblems.map(problem => problem).join(' ');

    packageJson.scripts.test = `jest ${testPattern}`;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4));
}

export function getActiveProblems(config) {
    const problems = [];

    Object.entries(config).forEach(([category, subcategories]) => {
        Object.entries(subcategories).forEach(([subcategory, problemList]) => {
            problemList.forEach(problem => {
                if (!problem.startsWith('//')) {
                    problems.push(problem);
                }
            });
        });
    });

    return problems;
}
