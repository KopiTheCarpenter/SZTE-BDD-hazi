Feature: Navigating to Petstore page and start to create pet and cancel it
  @test
  Scenario: Perform Pet creation cancellation
    Given I open the Petstore page click create pet then click cancel
    Then I verify that i got redirected to the pet list page