// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
renderLicenseBadge = (license) => {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`;
  }
  if (license === "MPL-2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(
      license
    )})`;
  }
  if (license === "None") {
    return ``;
  }
};

// Function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = (license) => {
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  }
  if (license === "MPL-2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license === "None") {
    return ``;
  }
};

// Function that returns the license section of README
// If there is no license, return an empty string
renderLicenseSection = (license) => {
  if (license === "None") {
    return `## License
  This project is not licensed.`;
  } else {
    return `## License 
  This project is licensed by ${license}. Click the license badge above to learn more.`;
  }
};

// Function to generate markdown for README
function generateMarkdown(userInput) {
  return `## ${userInput.title}

  ${renderLicenseBadge(userInput.licenseChoice)}

  ## Description
  ${userInput.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ${renderLicenseSection(userInput.licenseChoice)}

  ## Contributions
  ${userInput.contributions}

  ## Tests
  ${userInput.tests}

  ## Questions
  If you have any questions about this repository, please email 
  ${userInput.email} or follow https://github.com/${userInput.github}.
`;
}

// Export generateMarkdown function to index.js
module.exports = generateMarkdown;
