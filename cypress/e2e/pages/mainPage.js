import { CommonPage } from "./commonPage";

const locatorsDataTest = {
  productSortContainer:"product-sort-container",
  inventoryList:"inventory-list",
  inventoryItem:"inventory-item"
}

export class MainPage extends CommonPage{

  //Checks
  checkUrlMainPage () {
    cy.url().should('include', 'inventory.html');
  }

  checkLastProductContent (productContent) {
    this.getLastProductFromProductList().should('contain', productContent);
  }

  checkFirtstProductContent (productContent) {
    this.getFirstProductFromProductList().should('contain', productContent);
  }

  //Gets
  getLastProductFromProductList () {
      return this.getElementByDataTest(locatorsDataTest.inventoryItem).last();
  }

  getFirstProductFromProductList () {
    return this.getElementByDataTest(locatorsDataTest.inventoryItem).first();
  }

  //Selects
  selectDropdownOption (option) {
    this.getElementByDataTest(locatorsDataTest.productSortContainer).select(option);
  }

}