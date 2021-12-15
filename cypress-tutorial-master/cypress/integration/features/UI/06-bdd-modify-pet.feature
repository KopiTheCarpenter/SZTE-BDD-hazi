Feature: Navigating to Petstore page and modify pet
  @test
  Scenario: Perform Pet Modification
    Given I open the Petstore and modify pet
    Then I verify the Modifications made to the pet