@main
Feature: Main Test  
 
    Background: 
        Given I login and keep the sesion for the standar_user

    #ejercico 24/03/2025
    Scenario: Insert in product details and go back, check that product is not added to cart
        Given I check that the element with data-test "shopping-cart-badge" should "not.exist"
        And I check that the element with data-test "add-to-cart-sauce-labs-bolt-t-shirt" should "be.visible"
        When I click on the element with text "Sauce Labs Bolt T-Shirt"
        And I check that the url include the endpoint "?id="
        And I check that the element with data-test "back-to-products" should "be.visible"
        And I click on the button with data-test "back-to-products"
        Then I check that the element with data-test "shopping-cart-badge" should "not.exist"
        And I check that the url doesn't include the endpoint "?id="
    
    @smoke
    Scenario: order products from lowest to highest price and check that the first product is the cheapest and the last product is the most expensive
        Given I select the option "Price (low to high)" in the dropdown
        And I check that the first product in the product list contain "Sauce Labs Onesie"
        And I check that the first product in the product list contain "$7.99"
        When I check that the last product in the product list contain "Sauce Labs Fleece Jacket"
        Then I check that the last product in the product list contain "$49.99"
      
