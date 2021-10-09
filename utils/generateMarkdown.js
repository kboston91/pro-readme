// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
   return '[MIT License](https://opensource.org/licenses/MIT)'
  }else if(license === 'ISC'){
    return '[ISC License](https://opensource.org/licenses/ISC)' 
  }else if(license === 'Apache--License--2.0'){
    return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)'
  }else if (license === 'GNU--GPLv2'){
    return '[GNU GPLv2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }else if (license === 'GNU--GPLv3'){
    return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)'
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   this.license = license;

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![](https://img.shields.io/badge/license-${data.license}-blue)

## Description

${data.description}

## Table of Contents

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)


## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

${renderLicenseLink(data.license)} 

## Contributing

${data.contributing}

## Test

${data.test}

## Questions

[GitHub](https://github.com/${data.questions})

If you have any questions, please reach out to me at this email address: <${data.questions2}>
`;
}

module.exports = generateMarkdown;