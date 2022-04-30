// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
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
  ## Contributing
   ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  https://github.com/${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;