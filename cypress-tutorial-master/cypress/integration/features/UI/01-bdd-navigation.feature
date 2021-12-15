Feature: Navigating to Petstore page and verifying title
  @test
  Scenario: Perform Navigation
    Given I open the Petstore web url
    Then I verify title of web page as 'Petstore'