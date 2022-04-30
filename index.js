// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        message: '',
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
        message: 'What are the steps required to install your project?'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of how to run tests.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public 2.0', 'Apache 2.0', 'MIT', 'Boost Software 1.0', 'The Unlicense'],
    },
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
