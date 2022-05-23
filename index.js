// TODO: need to add all packages needed for my application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateMarkdown');





// TODO: I need to create an array of questions for user input with inquirer

const userQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },
    {
        type: 'input',
        message: 'Message',
        name: 'Ex',
    },

  ]);
};



// TODO: need to create initiation function in order to run application



// Function to initialize application 