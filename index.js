// TODO: Declaring the dependencies and variables
 const inquirer = require("inquirer");
 const fs = require("fs")


 console.log('Hi, welcome');
 
 // Create an array of questions for user input
 const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: "
    },
    {
        type: "input",
        name: "author",
        message: "Please enter the author's name?"
    },
    {
        type: "input",
        name: "Usage",
        message: "What is your objectif for this project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using for this project? ",
        choices: ["MIT", "GNU", "ISC",   
        ]
    },
    {
        type: "input",
        name: "test",
        message: "What type of test commands were used?"
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub username:"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address: "
    },
    
    {
        type: "input",
        name: "url",
        message: "include project's deployed url."
    }
 ];
 
 inquirer.prompt(questions).then((answers) => {
   const { title, description, license, author, usage, test, github, email, url } = answers;


   const readme = `
   # ${title}

   ## Table of Contents 
- [Description](#description)
- [Usage](#usage)
- [Author](#author)
- [License](#license)
- [Github](#github)
- [License](#license)
- [Email](#email)
- [Test](#test)
- [Url](#url)

   ## Description

   ${description}

   ## License

   ${license}

   ## Author

   ${author}

   ## Usage

   ${usage}

   ## Test

   ${test}

   ## Github

   ${github}

   ## Email

   ${email}

   ## Url

   ${url}
`;

// Function to create a function to write README file

fs.appendFile ("README.md", readme, (error) => 
    console.log(error ? "Error in your file" : "success, good luck on your project!")
    


 ); 



});
