// TODO: need to add all packages needed for my application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateMarkdown');

//  create an empty array and the all individual classes with require





// TODO: I need to create an array of questions for user input with inquirer for Manager, intern, engineer.
// need .then after promise

const newTeamMember = () => {
    return inquirer.prompt ([
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        choices: ['Engineer', 'Intern', "I don't want to add any more team members"],
        name: "newMember"
    },

    ])

    .then((answers) => {
        if (answers.newMember === 'Engineer') {
            engineerQuestions();
        } else if (answers.newMember === 'Intern') {
            internQuestions();
            // TODO: console log is not working
        } else if (answers.newMember === "I don't want to add anymore team members") {
            (answers) => fs.writeFile('index.html', genHTML(answers))
            (() => console.log('Team Page successfully generated'))
        }

    })


    

};



// TODO: add console log to function below for message to appear

const managerQuestions = () => {
    inquirer.prompt([
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
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerPhone',
    },

  ])
  .then((answers) => {
      
    newTeamMember()
   
  });

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

  ])

  .then((answers) => {

      newTeamMember()

   });

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

  ])

  .then((answers) => {

    let intern = new Intern

    newTeamMember()

 });


};


// TODO: need to create initiation function in order to run application
function init() {
    managerQuestions()
    // .then((answers) => fs.writeFileSync('html.index', genHTML(answers)))
    // .then(() => console.log('Team Page successfully generated'))
    
};


// Function to initialize application 
init();