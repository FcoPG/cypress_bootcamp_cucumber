#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"
 
# Los Scenarios son los tests (lo que antes era "it")
 Scenario: login happy path
  Given I type standar user in login page
  And I type the correct password in login page
  And I check that url doesn't contain the endpoint inventory.html
  When I click on the login button
  Then I check url include the endpoint inventory.html

Scenario: simple login
  Given I login with valid user and password

 Scenario: Better login
  Given I type the user name "standard_user"
  And I type the password "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"

 Scenario: The very best login test
  Given I type in the text box with data test "username" the text "standard_user"
  And I type in the text box with data test "password" the text "secret_sauce"
  And I check that the url doesn't include the endpoint "inventory.html"
  When I click on the button with data-test "login-button"
  Then I check that the url include the endpoint "inventory.html"

Scenario Outline: Check all acepted usernames Scenario Outline
    Given I type the user name "<username>"
    And I type the password "<password>"
    When I click on the button with data-test "login-button"
    Then I check that the url include the endpoint "inventory.html"

    Examples:
      | username                | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user              | secret_sauce |
      | visual_user             | secret_sauce |

Scenario: Check the errors login messages - Epic sadface: Username is required, Epic sadface: Password is required  
    Given I type the password "secret_sauce"
    When I click on the button with data-test "login-button"
    Then Check that the error message "Epic sadface: Username is required" is contained
    And the "password" text box is cleared
    And I click on the button with data-test "error-button"
    And Check that the error message "Epic sadface: Username is required" is not contained
    Given I type the user name "standard_user"
    When I click on the button with data-test "login-button"
    Then Check that the error message "Epic sadface: Password is required" is contained

Scenario: Check error login message -  Epic sadface: Username and password do not match any user in this service
    Given I type the user name "standard_use"
    And I type the password "secret"
    And Check that the error message "Epic sadface: Username and password do not match any user in this service" is not contained
    When I click on the button with data-test "login-button"
    Then Check that the error message "Epic sadface: Username and password do not match any user in this service" is contained
     
Scenario: Check error message locked_out_user login - Epic sadface: Sorry, this user has been locked out.
    Given I type the user name "locked_out_user"
    And I type the password "secret_sauce"
    When I click on the button with data-test "login-button"
    Then Check that the error message "Epic sadface: Sorry, this user has been locked out." is contained



 