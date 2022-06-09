// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Input the title of your README',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a brief description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter your programs installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter your programs usage instructions',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter your programs test instructions',
        name: 'test'
    },
    {
        type: 'confirm',
        message: 'Would you like to have contributers on this project?',
        name: 'contributers',
        default: true
    },
    {
        type: 'input',
        message: 'Perfect! Please enter your contribution guidelines',
        name: 'contribute',
        when: ({contributers}) => {if(contributers){return true}else false},
        validate: contributersInput => {if(contributersInput){return true}else return false}
    },
    {
        type: 'list',
        message: 'what type of license will you be using for this project?',
        choices: ['agpl-3.0', 'gpl-3.0', 'apache-2.0', 'no licence'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your E-mail',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter instructions on how to reach you',
        name: 'contactInstructions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, `${data}`, err => err ? console.error(err) : console.log('Success') );
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(readMe => {console.log(readMe); writeToFile(readMe.title, generateMarkdown(readMe))})
