Feature: Navigating to Petstore page and verifying tags of the newly created pet
  @test
  Scenario: Perform Tag Check
    Given I open the Petstore have an important pet freshly created
    Then I verify the tags of the newly created pet in previous step