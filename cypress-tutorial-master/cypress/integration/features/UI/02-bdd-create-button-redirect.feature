Feature: Navigating to Petstore page and click create pet
  @test
  Scenario: Perform Click on create pet
    Given I open the Petstore app and click 'Create a pet' button
    Then I verify the i am redirected to 'http://the-pettest-store.herokuapp.com/pet/create'