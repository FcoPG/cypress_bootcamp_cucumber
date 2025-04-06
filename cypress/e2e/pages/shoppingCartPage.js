import {CommonPage} from "./commonPage";

// Locators on the Shopping Cart page
const locators = {
    inventoryItem: 'inventory-item'
}

export class ShoppingCartPage extends CommonPage {
    checkInventoryItemNoExist() {
        this.getElementByDataTest(locators.inventoryItem).should('not.exist')
    }

    checkInventoryItemIsVisible() {
        this.getElementByDataTest(locators.inventoryItem).should('be.visible')
    }

    checkInventoryItem(itemName, itemPrice) {
        cy.contains(`[data-test="${locators.inventoryItem}"]`, itemName).should('contain', itemName).and('contain', itemPrice)
      }
}

