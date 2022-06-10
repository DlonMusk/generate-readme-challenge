// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return (!license || (license == 'no license')) ? '' : 
  `![badge](https://img.shields.io/static/v1?label=License&message=${license}&color=blue)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return (!license || (license == 'no license')) ? '' : `[${license}](https://choosealicense.com/licenses/${license}/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  return (!license || (license == 'no license')) ? '' :

  `
  ## [License](#table-of-contents)
  
  This application is run under the conditions of the following license
  
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # <${data.title}>
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}

  ## Features
  ${data.features}

  ## How to contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Contact
  [GitHub](https://github.com/${data.github})\n
  Email: ${data.email}
  ${data.contactInstructions}
`;
}

module.exports = generateMarkdown;