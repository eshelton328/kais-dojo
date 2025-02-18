import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../bubbles.config.js';
import problems from './problems.js';
import { updatePackageJson } from './align-configs.js';

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
        content += `export function ${problem.fn}(${problem.args}): ${problem.return} {\n\n}\n\n`;

        if (problem.fn2) {
            content += `export function ${problem.fn2}(${problem.args2}): ${problem.return2} {\n\n}`;
        }
    } else if (problem.type === 'class') {
        const genericType = problem.generic || '';
        content += `export default class ${problemName}${genericType} {\n`;

        if (problem.properties) {
            problem.properties.forEach(prop => {
                content += `    ${prop.scope || 'private'} ${prop.name}: ${prop.type};\n`;
            });
            content += '\n';
        }

        content += `    constructor() {\n\n    }\n\n`;

        if (problem.methods) {
            problem.methods.forEach(method => {
                content += `    ${method.name}(${method.args}): ${method.return} {\n\n    }\n\n`;
            });
        }

        content += `}\n`;
    }

    fs.writeFileSync(filePath, content);
}

function generateProblems(numProblems) {
    const categories = Object.keys(config);
    const selectedProblems = [];

    categories.forEach(category => {
        const subcategories = Object.keys(config[category]);
        subcategories.forEach(subcategory => {
            const problemList = config[category][subcategory];
            const uncommentedProblems = problemList.filter(problemName => !problemName.startsWith('//'));
            selectedProblems.push(...uncommentedProblems);
        });
    });

    if (numProblems > selectedProblems.length || numProblems === 0) {
        numProblems = selectedProblems.length;
    }

    for (let i = selectedProblems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedProblems[i], selectedProblems[j]] = [selectedProblems[j], selectedProblems[i]];
    }

    const problemsToGenerate = selectedProblems.slice(0, numProblems);

    problemsToGenerate.forEach(problemName => {
        const [category, subcategory] = findProblemCategoryAndSubcategory(problemName);
        if (category && subcategory) {
            const problem = problems[category][subcategory][problemName];
            if (problem) {
                createProblemFile(problemName, problem);
                console.log(`Generated ${problemName}`);
            } else {
                console.error(`Problem definition not found for ${problemName}`);
            }
        } else {
            console.error(`Category or subcategory not found for ${problemName}`);
        }
    });

    updatePackageJson(problemsToGenerate);
}

function findProblemCategoryAndSubcategory(problemName) {
    for (const category in problems) {
        for (const subcategory in problems[category]) {
            if (problems[category][subcategory][problemName]) {
                return [category, subcategory];
            }
        }
    }
    return [null, null];
}

const numProblems = parseInt(process.argv[2], 10) || 0;
generateProblems(numProblems);
