import { exec } from 'child_process';

const args = process.argv.slice(2);
const numProblems = parseInt(args[0], 10);

if (isNaN(numProblems) || numProblems <= 0) {
    console.error('Please provide a valid number of problems to generate.');
    process.exit(1);
}

// Call the generate script with the specified number of problems
exec(`node ./scripts/generate.js ${numProblems}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
    }
    console.log(stdout);
});
