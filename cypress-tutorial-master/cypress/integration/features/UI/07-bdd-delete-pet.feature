Feature: Navigating to Petstore page and deleting pet
  @test
  Scenario: Perform Delete
    Given I open the Petstore app and delete pet with name 'Ujonc'
    Then I verify the pet named: 'Ujonc' and type of 'cat' is deleted
  @test
  Scenario: Perform Delete
    Given I open the Petstore app and delete pet with name 'Halacsu'
    Then I verify the pet named: 'Halacsu' and type of 'fish' is deleted
  @test #only necessary, because you can create pet with negative age. so it deletes created pets so it does not flood the list
  Scenario: Perform Delete
    Given I open the Petstore app and delete pet with name 'NegativEletkor'
    Then I verify the pet named: 'NegativEletkor' and type of 'cat' is deleted
    