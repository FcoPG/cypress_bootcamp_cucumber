import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import 'cypress-mochawesome-reporter/cucumberSupport';

// import Class
import { ShoppingCartPage } from "../pages/shoppingCartPage";

// Instancia de clase
let shoppingCartPage = new ShoppingCartPage();

Given("I check that the item with name {string} and prince {string} appears", (itemName, itemPrice) => {
    shoppingCartPage.checkInventoryItem(itemName, itemPrice);
   });