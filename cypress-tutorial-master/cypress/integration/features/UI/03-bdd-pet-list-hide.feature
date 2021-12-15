Feature: Navigating to Petstore page and clicking on pet type symbol to hide that type
  @test
  Scenario: Perform Click on 'cat'
    Given I open the Petstore page and click on the 'cat' symbol
    Then I verify there are no 'cat's left in the list
  @test
  Scenario: Perform Click on 'dog'
    Given I open the Petstore page and click on the 'dog' symbol
    Then I verify there are no 'dog's left in the list
  @test
  Scenario: Perform Click on 'fish'
    Given I open the Petstore page and click on the 'fish' symbol
    Then I verify there are no 'fish's left in the list