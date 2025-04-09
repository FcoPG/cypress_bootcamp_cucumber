import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

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

 Given("I click on the element with data-test {string}", (elementByDataTest) => {
  commonPage.clickElementByDataTest(elementByDataTest);
 });

 Given("Check the text {string} is contained in the body", (text) => { 
  commonPage.checkTextContainInBody(text);
 });

 Given("Check the text {string} is not contained in the body", (text) => { 
  commonPage.checkTextNotContainInBody(text);
 });

 Given("I check that the element with data-test {string} should {string}", (elementByDataTest, assertion) => {
  commonPage.checkElementByDataTestShould(elementByDataTest, assertion);
 });

 Given("I click on the element with text {string}", (elementByText) => {
  commonPage.clickElementByContent(elementByText);
 });

 Given("I check that the element with data-test {string} should {string}, {string}", (elementByDataTest, assertion, number) => {
  commonPage.checkElementByDataTestShouldNumber(elementByDataTest, assertion, number);
 });

 Given("I type {string} in the input with data-test {string}", (text, elementByDataTest) => {
  commonPage.typeElementByDataTest(elementByDataTest, text);
 });
 
 /////--------- Steps para test de accesibilidad

  Given('I test the accesibility in all the screen', () => {
    commonPage.testAccesibilityInScreen()
  })

  Given('I test the accesibility on the element with locator {string}', (elementLocator) => {
    commonPage.testAccesibilityOnElement(elementLocator)
  })

  

