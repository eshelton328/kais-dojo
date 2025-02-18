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

    Object.entries(config).forEach(([category, subcategories]) => {
        Object.entries(subcategories).forEach(([subcategory, problems]) => {
            problems.forEach(problem => {
                if (problem.startsWith('//')) return;

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

export function updatePackageJson(generatedProblems) {
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    const testPattern = generatedProblems.join(' ');

    packageJson.scripts.test = `jest ${testPattern}`;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 4));
}

export function getActiveProblems(config) {
    const problems = [];

    Object.entries(config).forEach(([_, subcategories]) => {
        Object.entries(subcategories).forEach(([_, problemList]) => {
            problemList.forEach(problem => {
                if (!problem.startsWith('//')) {
                    problems.push(problem);
                }
            });
        });
    });

    return problems;
}
