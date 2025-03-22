import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CommonPage} from "../pages/commonPage"

//Instancias de clase
let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
 });

 Given("I check that the url doesn't include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlnotInclude(endpoint);
 });

 Given("I check that the url include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlInclude(endpoint);
 });
 
 Given("I click on the button with data-test {string}", (buttonByDataTest) => {
  commonPage.clickButtonByDataTest(buttonByDataTest);
 });

 Given("I type in the text box with data test {string} the text {string}", (texBoxByDataText, text) => {
  commonPage.typeInTextBoxByDataTest(texBoxByDataText, text);
 });

 Given("I click on the element with class {string}", (elementByClass) => {
  commonPage.clickElementByClass(elementByClass);
 });

 Given("Check the text {string} is contained in the body", (text) => { 
  commonPage.checkTextContainInBody(text);
 });

 Given("Check the text {string} is not contained in the body", (text) => { 
  commonPage.checkTextNotContainInBody(text);
 });
 

