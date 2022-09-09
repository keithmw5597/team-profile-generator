const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generatePage');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/generatePage');
const teamArray = [];

const addEmployee = () => {
    inquirer.prompt ([
        {
            type: 'checkbox', 
            name: 'role',
            message: 'Choose the employee"role',
            choices: ['Engineer', 'Intern', 'Manager', 'Done adding employees']
        }
    ])
    .then(answers => {
        const userRole = answers.role;

        if (userRole == 'Manager') {
            addManager();
        }
        
        if (userRole == 'Engineer') {
            addEngineer();
        }

        if (userRole == 'Intern') {
            addIntern();
        }

        if (userRole == 'Done adding employees' ) {
            generateTheTeam();
        }

        if (userRole == 'Manager' && userRole == "intern" && userRole == 'Engineer') {
            addManager();
            addEngineer();
            addIntern();
        }
    })
};

const addManager = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager for you team',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    return 'Please enter a name';
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    return 'Please enter an ID number';
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Manager's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    return 'Please enter an email';
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's office phone number?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    return "Please enter an office phone number.";
                }
            }
        }
        
    ])
    .then(answers => {
        const {name, id, email, officeNumber } = answers;
        teamArray.push(new Manager(name, id, email, officeNumber));
    })
};

const addEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please provide the name of the engineer",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    return 'Please enter a name';
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the Engineer's ID number?",
            validate: id => {
                if (id) {
                    return true;
                } else {
                    return 'Please enter an ID number';
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the Engineer's email?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    return 'Please enter an email';
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username?",
            validate: github => {
                if (github) {
                    return true;
                } else {
                    return "Please enter an github username.";
                }
            }
        }
        
    ])
    .then(answers => {
        const {name, id, email, github } = answers;
        teamArray.push(new Manager(name, id, email, github));
    })
};