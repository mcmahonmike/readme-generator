// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "") {
    return "";
  } else if (license === 'MIT' ) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  
  } else if (license === 'Apache 2.0 License' ) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
   else if (license === 'BSD 3-Clause' ) {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
   else if (license === 'BSD 2-Clause' ) {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  }
   else if (license === 'GNU GPL v3' ) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "") {
    return "";
  } else if (license === 'Apache 2.0 License' ) {
    return `https://opensource.org/licenses/Apache-2.0`
  }
   else if (license === 'BSD 3-Clause' ) {
    return `https://opensource.org/licenses/BSD-3-Clause`
  }
   else if (license === 'BSD 2-Clause' ) {
    return `https://opensource.org/licenses/BSD-2-Clause`
  }
   else if (license === 'GNU GPL v3' ) {
    return `https://www.gnu.org/licenses/gpl-3.0`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === ""){
    return '';
  } else {
    return `
    ## License
    License information: ${renderLicenseLink(license)}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}

  ${renderLicenseBadge(data.license)}

  ## Table Contents
- [Descriptions](#description)
- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#test)
- [Contributing](#contributing)
- [Questions](#questions)

  ## Description
   ${data.description}

  ## Installation
   ${data.install}

  ## Usage 
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
   ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Here is the link to my GitHub repository


  GitHub: https://github.com/${data.github}


  If you have any questions you might have about this project you can reach me at my email provided here 


  Email: ${data.email}

`;
}

module.exports = generateMarkdown;