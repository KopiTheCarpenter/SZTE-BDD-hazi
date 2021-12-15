Feature: Navigating to Petstore page and creating pet
  @test
  Scenario: Perform Pet Creation with type without age(null)
    Given I open the Petstore app and create pet with name 'Kutya', type 'dog', age ''
    Then I verify the pet named: 'Kutya' and type of 'dog', age '0' exists
  @test
  Scenario: Perform Pet Creation with type and age
    Given I open the Petstore app and create pet with name 'Halacsu', type 'fish', age '876'
    Then I verify the pet named: 'Halacsu' and type of 'fish', age '876' exists
  @test
  Scenario: Perform Pet Creation with type and negative age
    Given I open the Petstore app and create pet with name 'NegativEletkor', type 'cat', age '-1'
    Then I verify the error message on pet creation page