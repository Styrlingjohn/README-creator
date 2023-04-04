const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      name: 'descript',
      message: 'Write a short description of what you project does',
    },
    {
        type: 'input',
        name: 'toContents',
        message: 'Please add a table of contents',
        
      },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions',
        
      },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples of uses',
        
      },
    {
      type: 'input',
      name: 'instructions',
      message: 'Provide some instructions on how to use',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select your license type',
      choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
      
    }
  ])
  .then((data) => {

    fs.writeFile('README.md', generateMarkdown(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });