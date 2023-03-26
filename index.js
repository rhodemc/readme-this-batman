// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Link to README markdown creation
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
      {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "Please write a short description of your project:",
      },
      {
        type: "list",
        name: "licenseChoice",
        message: "What kind of license does your project have?",
        choices: ["MIT", "MPL-2.0", "None"],
      },
      {
        type: "input",
        name: "installation",
        message: "Which command should be used to install dependencies?",
      },
      {
        type: "input",
        name: "tests",
        message: "Which command should be used to run tests?",
      },
      {
        type: "input",
        name: "usage",
        message: "What should the user know about running the application?",
      },
      {
        type: "input",
        name: "contributions",
        message: "Were there any outside contributions to the project?",
      },
    ])
};

// Function to write README file
const writeFile = (userInput) => {
  fs.writeFile("README.md", userInput, (err) => {
    err ? console.log(err) : console.log("Successfully created your README file!");
  });
};

// Function to initialize app
function init() {
  questions()
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((userInput) => {
      return writeFile(userInput);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
