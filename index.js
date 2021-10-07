// TODO: Include packages needed for this application
const fs = require('fs');
var inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');
const Choices = require('inquirer/lib/objects/choices');
// TODO: Create an array of questions for user input
// title of my project and sections entitled 
//-Description, 
//Table of Contents,
//## Table of Contents (Optional)

//If your README is very long, add a table of contents to make it easy for users to find what they need.

// * [Installation](#installation)
// * [Usage](#usage)
// * [Credits](#credits)
// * [License](#license)
 
//-Installation, 
//-Usage, 
//-License, 
//-Contributing, 
//-Tests
//-Questions/contact info

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your repo?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation Instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage Instructions'
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project use?',
    choices: ['MIT', 'ISC', 'GNU--GPLv2', 'Apache--License--2.0', 'GNU--GPLv3']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project? Please include links to their GitHub profiles.'
  },
  {
    type: 'input',
    name: 'test',
    message: 'How do you test this project?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'questions2',
    message: 'Please enter your email address.'
  }
]
inquirer
  .prompt(questions)
  .then((responses) => {
    var readMeText = ''
    fs.writeFile('Readme1.md', generateMarkdown(responses), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();