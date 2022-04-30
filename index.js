// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of the project?(Required)',
        validate: projectTitle => {
            if (projectTitle) {
              return true;
            } else {
              console.log('Please enter your project name!');
              return false;
            }
          },
        
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of the project: (Reuired)',
        validate: description => {
            if (description) {
              return true;
            } else {
              console.log('Please enter a brief description of the project');
              return false;
            }
          },
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions for the project: (Required)',
        validate: install => {
            if (install) {
              return true;
            } else {
              console.log('Please enter installation instructions for the project');
              return false;
            }
          },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide the necessary usage information: (Required)',
        validate: usageInfo => {
            if (usageInfo) {
              return true;
            } else {
              console.log('Please enter the usage information');
              return false;
            }
          },
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide the contribution guidelines for the project: (Required)',
        validate: contribution => {
            if (contribution) {
              return true;
            } else {
              console.log('Please enter contribution guidelines');
              return false;
            }
          },
        
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide the necessary test instructions: (Required)',
        validate: test => {
            if (test) {
              return true;
            } else {
              console.log('Please enter the test instructions');
              return false;
            }
          },
    },
    {
        type: 'list',
        name: 'licence',
        message: 'Please choose the license/licenses you will use for your project:',
        choices: ['Apache 2.0 License', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU GPL v3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username: (Required):',
        validate: usernameInput => {
            if (usernameInput) {
               return true;
             } else {
               console.log('Please enter your Github username!');
               return false;
        }
      },
    },
    {  
        type: 'input',
        name: 'email',
        message: 'Please enter you email address: (Required)',
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter the test instructions');
              return false;
            }
          },
        
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile('README.md', generateMarkdown(data), err => {
//         if (err) throw new Error(err)
    
//     });
// }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        fs.writeFile('./dist/README.md', generateMarkdown(data), err => {
        if (err) throw new Error(err)
    })
    }
    )
}

// Function call to initialize app
init();