// TODO: need to add all packages needed for my application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateMarkdown');





// TODO: I need to create an array of questions for user input with inquirer for Manager, intern, engineer.

const newTeamMember = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
    },

    ]);
};





const managerQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'mangerName',
    },
    {
        type: 'input',
        message: "What is the team manager's id?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the team manager's e-mail?",
        name: 'managerE-mail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerPhone',
    },

  ]);
};





const engineerQuestions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is your engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is your engineer's id?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is your engineer's e-mail?",
        name: 'engineerE-mail',
    },
    {
        type: 'input',
        message: "What is your engineer's GitHub username?",
        name: 'engineerGithub',
    },

  ]);
};



const internQuestions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        message: "What is your intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "what is your intern's id?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "what is your intern's email?",
        name: 'internE-mail',
    },
    {
        type: 'input',
        message: "What is your intern's school?",
        name: 'internSchool'
    },

  ]);
};


// TODO: need to create initiation function in order to run application
function init() {
    
}


// Function to initialize application 