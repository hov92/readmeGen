// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require('fs')
const utils = require('utils')
const generateMarkdown = require('./utils/generateMarkdown')


const writeFileAsync = util.promisify(fs.writeFile);


// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write A BREIF DESCRIPTION OF PROJECT',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'WRITE HOW TO INTALL APPLICATION/CODE',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'WHAT IS THE USE OF THIS APP/CODE?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
  },
  {
    type: '',
    name: 'license',
    message: 'WHAT LICENSE?'
  },
  {
    type: '',
    name: 'test',
    message: ''
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter your LinkedIn URL.',
  }];

  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = generateMarkdown(data)
  fs.writeFileAsync("Read.md", markdown, function(err){console.log(err)} )
}

// TODO: Create a function to initialize app
const init = () => {
  questions()
    .then((answers) => writeFileAsync('Read.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to ReadMe'))
    .catch((err) => console.error(err));
};


// Function call to initialize app
init();


// const generateHTML = (answers) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//     <p class="lead">I am from ${answers.location}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${answers.github}</li>
//       <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// // Bonus using writeFileAsync as a promise


// init();

// function writeToFile(fileName, data) {
//   const markdown = generateMarkdown(data)
//   fs.writeFile("Readme.md", markdown, function(err){console.log(err)} )
// }