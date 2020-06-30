@politicianAddDataPage
Feature: 1-Politician Creation Page
    As a site user, I want to use the politician creation page so that
     I can add politician details without any issue

####################### Assumptions/ACs ########################
### Note: Some of the following assumptions/acceptance-criterias have been made/designed on the basis of given requirements
# 1- Popup must have same name displayed on it matching to what is entered in the form according to the requirements
# 2- All the fields are mandatory(as per requirement) so if the page gets submitted successfully with any missing value 
#    then it should be considered as a bug and should show some error message on the popup
# 3- Same data can not be added twice (Unique data constraint) and it should give error message on the popup
# 4- Info link check validity message - (currently present/implemnted on test-site)
# 5- All the values in the drop-down list has to be in same case i.e. either in UPPERCASE/Title/lower case 
# 6- Date format should be in 'mm/dd/yyyy' (as mentioned in requirements) otherwise it's a bug
# 7- Position field should be a visible String/Text value so 'input' type should be 'text' - (as it is not password field)

  
   Background: Navigating to the site
      Given user navigates to the site
  
   @bug1
   Scenario: 11- Checking adding all the mandatory data - positive scenario
      When user submits new politician data page by entering following details in corresponding fields
        |FieldName       | Value            |
        |Full name       | Matt Brown       |
        |Country         | UK               |
        |Year of birth   | 01/30/1980       |
        |Position        | Minister         |
        |Source info URL | www.mpinfo.co.uk |
        |Risk level      | Low              | 
      Then user should see the popup with politician "Matt Brown" name
 
   @bug
   Scenario: 12- Checking adding data without name value - negative scenario
      When user submits new politician data page by entering following details in corresponding fields
        |FieldName       | Value            |
        |Country         | UK               |
        |Year of birth   | 01/30/1980       |
        |Position        | Minister         |
        |Source info URL | www.mpinfo.co.uk |
        |Risk level      | Low              | 
      Then user should see the popup with "Full Name field is missing...error message"

   @bug
   Scenario: 13- Checking same data should not be added twice - negative scenario
      When user submits new politician data page by entering following details in corresponding fields
        |FieldName       | Value            |
        |Full name       | John Doe         |
        |Country         | UK               |
        |Year of birth   | 01/30/1980       |
        |Position        | Minister         |
        |Source info URL | www.mpinfo.co.uk |
        |Risk level      | Low              | 
      Then user should see the popup with politician "John Doe" name
      When user submits new politician data page by entering following details in corresponding fields
        |FieldName       | Value            |
        |Full name       | John Doe         |
        |Country         | UK               |
        |Year of birth   | 01/30/1980       |
        |Position        | Minister         |
        |Source info URL | www.mpinfo.co.uk |
        |Risk level      | Low              |
      Then user should see the popup with "Politician John Doe already exist.....error message"
   
   Scenario: 14- Checking the info link validity message - positive scenario
      When user adds following "invalid" url 
        |FieldName       | Value            |
        |Source info URL | mpinfo |
      Then user should see the url validity message "Invalid URL format."
      When user adds following "valid" url 
        |FieldName       | Value          |
        |Source info URL | www.mpinfo.com |
      Then user should see the url validity message "Valid URL."

   @bug
   Scenario: 15- Checking all the options in drop-down has to be in same case(Title Case) - positive scenario
      When user checks the Risk level dropdown options
      Then user should see all of the values in following same case
        | OptionName | 
        | Low        | 
        | Medium     | 
        | High       | 
        | Huge       | 
   @bug  
   Scenario: 16- Checking Date format should be in 'mm/dd/yyyy'  - positive scenario
      When user enters date "01/30/1980" value in "Year of birth"
      Then user should see the same date value "01/30/1980" by retrieving it

   @bug
   Scenario: 17- Checking Position field should be a visible String/Text value - positive scenario
      When user checks the type of the "Position" textbox
      Then user should see Position textbox type as a "text"