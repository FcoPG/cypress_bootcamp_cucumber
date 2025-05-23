import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

// Clases importadas
import { LoginPage} from "../pages/loginPage"

//Instancias de clase
let loginPage = new LoginPage();

Given("I type standar user in login page", () => {
  loginPage.typeStandarUser();
 });

Given("I type the correct password in login page", () => {
  loginPage.typeCorrectPassword();
});

Given("I check that url doesn't contain the endpoint inventory.html", () => {
  loginPage.checkUrlIsNotMainPage();
});

Given("I click on the login button", () => {
  loginPage.clickLoginButton();
});

Given("I login with valid user and password", () => {
  loginPage.correctLogin();
});

// Better practices

Given("I type the user name {string}", (user) => {
  loginPage.typeUser(user);
 });

Given("I type the password {string}", (password) => {
  loginPage.typePassword(password);
 });

 Given("Check that the error message {string} is contained", (errorText) => {
  loginPage.checkErrorMessageIsContained(errorText);
 });

 Given("the {string} text box is cleared", (textBoxIdentify) => {
  loginPage.clearTextBox(textBoxIdentify);
 });  
 Given("Check that the error message {string} is not contained", (errorText) => {
  loginPage.checkErrorMessageIsNotContained(errorText);
 }); 

 
 //session
Given("I login and keep the sesion for the standar_user", () => {
  loginPage.loginKeepSession();
});
