import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../bubbles.config.js';
import problems from './problems.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const src_path = path.join(__dirname, '..', 'src');

function createProblemFile(problemName, problem) {
    fs.mkdirSync(src_path, { recursive: true });

    const filePath = path.join(src_path, `${problemName}.ts`);
    const description = problem.description ?
        `/**\n${problem.description}\n */\n\n` :
        '';

    let content = description;

    // Add first function
    content += `export function ${problem.fn}(${problem.args}): ${problem.return} {\n\n}\n\n`;

    // Add second function if it exists
    if (problem.fn2) {
        content += `export function ${problem.fn2}(${problem.args2}): ${problem.return2} {\n\n}`;
    }

    fs.writeFileSync(filePath, content);
}

function generateProblems() {
    // Store existing test files
    const testsPath = path.join(src_path, '__tests__');
    let testsBackup = null;
    if (fs.existsSync(testsPath)) {
        testsBackup = {
            path: testsPath,
            contents: fs.readdirSync(testsPath, { recursive: true })
        };
    }

    // Clear src directory but preserve tests
    if (fs.existsSync(src_path)) {
        const items = fs.readdirSync(src_path);
        for (const item of items) {
            if (item !== '__tests__') {
                const itemPath = path.join(src_path, item);
                fs.rmSync(itemPath, { recursive: true, force: true });
            }
        }
    } else {
        fs.mkdirSync(src_path);
    }

    // Restore tests if they were backed up
    if (testsBackup) {
        fs.mkdirSync(testsBackup.path, { recursive: true });
    }

    // Generate problems based on config
    Object.entries(config).forEach(([category, subcategories]) => {
        Object.entries(subcategories).forEach(([subcategory, problemList]) => {
            problemList.forEach(problemName => {
                if (problemName.startsWith('//')) return; // Skip commented problems

                const problem = problems[category]?.[subcategory]?.[problemName];
                if (!problem) {
                    console.error(`Problem definition not found for ${category}/${subcategory}/${problemName}`);
                    return;
                }

                createProblemFile(problemName, problem);
                console.log(`Generated ${problemName}`);
            });
        });
    });
}

generateProblems();

// Update configs
import { updateStats, updatePackageJson, getActiveProblems } from './align-configs.js';

const activeProblems = getActiveProblems(config);
updateStats(config);
updatePackageJson(activeProblems);
