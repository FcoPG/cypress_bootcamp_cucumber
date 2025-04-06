export class CommonPage{  
   //Urls
   visitLink(url) {
    cy.visit(url);
    }
    checkUrlnotInclude(endpoint) {
      cy.url().should('not.include', endpoint);
    }
  
    checkUrlInclude(endpoint) {
      cy.url().should('include', endpoint);
    }

   //Gets
   getElementByClass (elementByClass) {
    return cy.get(`[class="${elementByClass}"]`)
   }

   getElementByDataTest (elementByDataTest) {
    return cy.get(`[data-test="${elementByDataTest}"]`)
   }

   getAnyElement (element) {
    return cy.get(element)
   }

   //Clicks
   clickElementByDataTest(elementByDataTest) {
    this.getElementByDataTest(elementByDataTest).click()
   }

   clickButtonByDataTest(buttonByDataTest) {
    this.getElementByDataTest(buttonByDataTest).click()
  }

   clickElementByContent (elementByText) {
    cy.contains(elementByText).click()
   }

   clickButtonByText (text) {
    cy.get('inputbutton').contain(text).click()
   }

   //Types
   typeElementByDataTest(elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).type(text)
   }

   typeInTextBoxByDataTest (texBoxByDataText, text) {
    cy.get(`[data-test="${texBoxByDataText}"]`).type(text);
   }

   //Checks
   checkTextContainInBody (text) {
    cy.get('body').should('contain', text)
   }

   checkTextNotContainInBody (text) {
    cy.get('body').should('not.contain', text)
   }

   checkElementContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('contain', text)
   }

   checkElementNotContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('not.contain', text)
   }

   checkElementByClassContains (elementByClass, text) {
    this.getElementByClass(elementByClass).should('contain', text)
   }

   checkElementByClassNotContains (elementByClass, text) {
    this.getElementByClass(elementByClass).should('not.contain', text)
   }

   //Clears  
   clearTextBox(elementByDataTest) {
    this.getElementByDataTest(elementByDataTest).clear()
   }

   //Assertions
   checkElementByDataTestShould(elementByDataTest, assertion) {
    this.getElementByDataTest(elementByDataTest).should(assertion)
   }

   checkElementByClassShould(elementByClass, assertion) {
    this.getElementByDataTest(elementByClass).should(assertion)
   }

   checkElementByDataTestShouldNumber(elementByDataTest, assertion, number) {
    this.getElementByDataTest(elementByDataTest).should(assertion, number)
   }


  /// Función para testear accesibilidad
  testAccesibilityInScreen () {
    cy.injectAxe();
    cy.checkA11y();
  }

  testAccesibilityOnElement (elementLocator) {
    cy.injectAxe();
    cy.checkA11y(elementLocator)
  }
  
 
 
 
  }