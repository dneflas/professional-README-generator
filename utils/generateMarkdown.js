// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return '';
  }
  let formattedLicense = license.replaceAll(' ', '%20');

  return `
  ![license badge](https://img.shields.io/badge/license-${formattedLicense}-blue)
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'GNU AGPLv3':
      return 'https://choosealicense.com/licenses/agpl-3.0/';
    case 'GNU GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'GNU LGPLv3':
      return 'https://choosealicense.com/licenses/lgpl-3.0/';
    case 'Mozilla Public 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
    case 'Apache 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
    case 'Boost Software 1.0':
      return 'https://choosealicense.com/licenses/bsl-1.0/';
    case 'The Unlicense':
      return 'https://choosealicense.com/licenses/unlicense/';
    default:
      return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return '';
  }

  return `## License 

  This project is licensed under the [${license} License](${renderLicenseLink(license)}).  
  </br>
  `;
  // This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}  
  
  ## Description

  ${data.description}  
  <br>

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)  
  <br>

  ## Installation

  Use the following command to download dependencies for the project:  
  ~~~
  ${data.installation}
  ~~~
  <br>

  ## Usage

  ${data.usage}  
  <br>

${renderLicenseSection(data.license)}
  ## How to Contribute

  ${data.contributing}  
  <br> 

  ## Tests

  Using the following command to run tests:  
  ~~~
  ${data.tests}
  ~~~
  <br>

  ## Questions

  [GitHub](https://github.com/${data.github})  
  Contact <${data.email}> with any additional questions or comments.  
`;
}

module.exports = generateMarkdown;
