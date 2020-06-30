const { Given, When, Then } = require('cucumber')
var addDataPage = require('../pages/PoliticianAddData.page');
var basePage = require('../pages/base.page')
var modalPage = require('../pages/Modal.page')
var optionsList;
var actualInputType;

Given('user navigates to the site', ()=> {
  browser.url('./');
})

When(/^user submits new politician data page by entering following details in corresponding fields$/, (dataTable) => {
  basePage.webWaitForDisplayed(addDataPage.submitBtn);
  const data = dataTable.hashes();
  for (let i = 0; i < data.length; i++) {
    const fieldValue = data[i]['FieldName'];
    const element = addDataPage.getField(fieldValue);
    if (fieldValue !== "Year of birth" && fieldValue !== "Risk level") {
      basePage.webClearValue(element);
    }
    basePage.webAddValue(element, data[i]['Value']);
  }
  basePage.webClick(addDataPage.submitBtn);
});

Then(/^user should see the popup with politician \"(.*)\" name$/, (politicianName) => {
  basePage.webWaitForDisplayed(modalPage.modalBox);
  const alertActualText = basePage.webGetText(modalPage.modalBody);
  expect(alertActualText).to.contain(politicianName);
  basePage.webClick(modalPage.backButton);
  basePage.waitToLoad(3);
});

When(/^user adds following \"(.*)\" url$/, (validiity, dataTable) => {
  const data = dataTable.hashes();
  const element = addDataPage.getField(data[0]['FieldName']);
  basePage.webClearValue(element);
  basePage.webAddValue(element, data[0]['Value']);
  basePage.webClick(addDataPage.sourceInfoURLLbl);
});

When(/^user checks the Risk level dropdown options$/, () => {
  optionsList = addDataPage.getDropdownOptions;
  basePage.webWaitForDisplayed(addDataPage.riskLevel);
});

When(/^user enters date \"(.*)\" value in \"(.*)\"$/, (dateValue, dateFieldName) => {
  basePage.webAddValue(addDataPage.yob, dateValue);
  basePage.webClick(addDataPage.yobLbl);
  basePage.waitToLoad(3);
});

When(/^user checks the type of the \"(.*)\" textbox$/, (textBoxName) => {
  basePage.webWaitForDisplayed(addDataPage.position);
  const positionTextBox = addDataPage.getField(textBoxName)
  actualInputType = positionTextBox.getAttribute('type');
  basePage.waitToLoad(3);
});


Then(/^user should see the popup with \"(.*)\"$/, (expectedErrorMsg) => {
  basePage.webWaitForDisplayed(modalPage.modalBox);
  const alertActualText = basePage.webGetText(modalPage.modalBody);
  expect(expectedErrorMsg).to.equal(alertActualText);
  basePage.waitToLoad(2);
});

Then(/^user should see the url validity message \"(.*)\"$/, (validityExpectedText) => {
  let validityElement = (validityExpectedText === "Valid URL.") ? addDataPage.validFeedback : addDataPage.invalidFeedback;
  basePage.webWaitForDisplayed(validityElement);
  const validityActualText = basePage.webGetText(validityElement);
  expect(validityExpectedText).to.equal(validityActualText);
  basePage.waitToLoad(2);
});

Then(/^user should see all of the values in following same case$/, (dataTable) => {
  var data = dataTable.hashes();
  console.log("data raw :" + data);

  for (let i = 0; i < data.length; i++) {
    let expectedOptionText = data[i]['OptionName'];
    expect(expectedOptionText).to.equal(optionsList[i].getText());
  }
  basePage.webClick(addDataPage.submitBtn);
  basePage.waitToLoad(2);
});

Then(/^user should see the same date value \"(.*)\" by retrieving it$/, (expectedDateValue) => {
  const actualDateValue = basePage.webGetValue(addDataPage.yob);
  expect(expectedDateValue).to.equal(actualDateValue);
  basePage.waitToLoad(4);
});

Then(/^user should see Position textbox type as a \"(.*)\"$/, (expectedInputType) => {
  expect(expectedInputType).to.equal(actualInputType);
  basePage.waitToLoad(2);
});


