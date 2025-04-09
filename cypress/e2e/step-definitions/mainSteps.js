import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

// Clases importadas
import { MainPage} from "../pages/mainPage"

//Instancias de clase
let mainPage = new MainPage();

Given("I check url include the endpoint inventory.html", () => {
  mainPage.checkUrlMainPage();
 });

//ejercico 24/03/2025
Given("I select the option {string} in the dropdown", (option) => {
  mainPage.selectDropdownOption(option);
 });


 Given("I check that the first product in the product list contain {string}", (contain) => {
  mainPage.checkFirtstProductContent(contain);
 });

 Given("I check that the last product in the product list contain {string}", (contain) => {
  mainPage.checkLastProductContent(contain);
 });


