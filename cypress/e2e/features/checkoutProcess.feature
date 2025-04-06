Feature: Buy product process

    Background:
        Given I login and keep the sesion for the standar_user

    Scenario: "Complete checkout process with two products in the cart"
        Given I check that the element with data-test "shopping-cart-badge" should "not.exist"
        And I click on the element with data-test "add-to-cart-sauce-labs-backpack"
        And I check that the element with data-test "shopping-cart-badge" should "exist"
        And I check that the element with data-test "shopping-cart-badge" should "have.text", "1"
        And I click on the element with data-test "add-to-cart-sauce-labs-bolt-t-shirt"
        And I check that the element with data-test "shopping-cart-badge" should "have.text", "2"
        And I click on the element with data-test "shopping-cart-link"
        And I check that the url include the endpoint "/cart.html"
        And I check that the element with data-test "cart-list" should "contain", "Sauce Labs Backpack"
        And I check that the element with data-test "cart-list" should "contain", "Sauce Labs Bolt T-Shirt"
        When I click on the element with data-test "checkout"
        And I type "John" in the input with data-test "firstName"
        And I type "Doe" in the input with data-test "lastName"
        And I type "12345" in the input with data-test "postalCode"
        And I click on the button with data-test "continue"
        And I check that the url include the endpoint "/checkout-step-two.html"
        And I check that the element with data-test "cart-list" should "contain", "Sauce Labs Backpack"
        And I check that the element with data-test "cart-list" should "contain", "Sauce Labs Bolt T-Shirt"
        And I check that the item with name "Sauce Labs Backpack" and prince "$29.99" appears
        And I check that the item with name "Sauce Labs Bolt T-Shirt" and prince "$15.99" appears
        And I click on the button with data-test "finish"
        Then I check that the url include the endpoint "/checkout-complete.html"
        And I check that the element with data-test "complete-header" should "contain", "Thank you for your order!"
        And I click on the button with data-test "back-to-products"
        And I check that the url include the endpoint "/inventory.html"
        And I check that the element with data-test "shopping-cart-badge" should "not.exist"
