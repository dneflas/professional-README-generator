// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput){
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a description of your project.',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;
            } else { 
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        validate: installationInput => {
            if (installationInput){
                return true;
            } else {
                console.log('Please enter command to install dependencies');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: usageInput => {
            if (usageInput){
                return true;
            } else {
                console.log('Please provide instructions for use!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter contributing guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests.',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter a command to run tests!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'The Unlicense', 'None'],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject (err);
                return;
            }
            resolve ({
                ok: true,
                message: 'README file generated!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(readmeData => {
        return generateMarkdown(readmeData);
    })
    .then(markdownData => {
        return writeToFile('./dist/README.md', markdownData);
    })
    .then (writeToFileResponse => {
        console.log(writeToFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });
