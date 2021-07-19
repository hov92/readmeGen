// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const LicenseBadge = {
    apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    mit: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    mozilla: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    gnu: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  return LicenseBadge || ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const LicenseLink = {
    apache: "https://www.apache.org/licenses/LICENSE-2.0",
    mit: "https://choosealicense.com/licenses/mit/",
    gnu: "https://choosealicense.com/licenses/gpl-3.0/",
    mozilla: "https://www.mozilla.org/en-US/MPL/"
  }
  return LicenseLink || ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `Distributed under the [${license}](${renderLicenseLink(license)}) License.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ```md
  ${ data.description }
  ```
  ## Table of Contents
  ```md
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)
      ```
## Installaion
```md
  ${ data.installation }
  ```
## Usage
```md
  ${ data.usage }
  ```
## License
```md
  The license use is: ${ data.license }
  ```
## Contributing
```md
  ${ data.contributing }
  ```
## Tests
```md
  ${ data.test }
  ```
## Questions
```md
  For any question please visit me at: ${ data.github }
  ```



`;
}


module.exports = generateMarkdown;
