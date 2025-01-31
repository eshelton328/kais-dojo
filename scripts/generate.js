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

    if (problem.examples && problem.examples.length > 0) {
        content += '/**\nExamples:\n';
        problem.examples.forEach(example => {
            content += ` * Input: ${example.args}\n * Output: ${example.return}\n`;
        });
        content += ' */\n\n';
    }

    if (problem.type === 'fn') {
        // Handle function type problems
        content += `export function ${problem.fn}(${problem.args}): ${problem.return} {\n\n}\n\n`;

        // Add second function if it exists
        if (problem.fn2) {
            content += `export function ${problem.fn2}(${problem.args2}): ${problem.return2} {\n\n}`;
        }
    } else if (problem.type === 'class') {
        // Handle class type problems
        const genericType = problem.generic || '';
        content += `export default class ${problemName}${genericType} {\n`;

        // Add properties
        if (problem.properties) {
            problem.properties.forEach(prop => {
                content += `    ${prop.scope || 'private'} ${prop.name}: ${prop.type};\n`;
            });
            content += '\n';
        }

        // Add constructor
        content += `    constructor() {\n\n    }\n\n`;

        // Add methods
        if (problem.methods) {
            problem.methods.forEach(method => {
                content += `    ${method.name}(${method.args}): ${method.return} {\n\n    }\n\n`;
            });
        }

        content += `}\n`;
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
            // Skip if problemList is not an array
            if (!Array.isArray(problemList)) return;

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
