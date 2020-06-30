### Installation ###

You must have latest LTS version (12.17.0) [Node.js (https://www.nodejs.org/ )] installed.

### Usage ###

Install the Dependencies:


 > npm install


### Run the tests :

 > npm test


 ## Run Test with Specific Tag : 

 > npm test -- --cucumberOpts.tagExpression="@bug"


### Run the reports :
 
 ## For Allure Reprots with Screenshots attached for failed tests
  > npm run allure-report

 ## For JUnit Reprots
  > npm run junit-report
