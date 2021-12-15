Given('I open the Google web url', () => {
  cy.visit('https://www.google.com');
});
  
Then('I verify title of web page as {string}', (title) => {
  cy.title().should('include', title);
});



Given('I open the Petstore web url', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
});
  
Then('I verify title of web page as {string}', (title) => {
  cy.title().should('include', title);
});


Given('I open the Petstore app and click {string} button', (buttonText) => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
  cy.get('.nav-link').contains(buttonText).click();
});
  
Then('I verify the i am redirected to {string}', (newUrl) => {
  cy.url().should('be.equal', newUrl);
});


Given('I open the Petstore page and click on the {string} symbol', (type) => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
  cy.get('.'+type).first().click();
});
  
Then('I verify there are no {string}s left in the list', (type) => {
  cy.get('.'+type).should('have.length', 1);
});


Given('I open the Petstore app and create pet with name {string}, type {string}, age {string}',(name, type, age) => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet/create');
  cy.get('form').within(($form) => {
    cy.get('#name').type(name);
    cy.get('#type-'+type).check();
    cy.get('#highlighted').check();
    if(age != '')cy.get('#age').type(age);
    cy.get('.btn').contains('Create')
      .should('be.visible')
      .click();
  });
});
Then('I verify the pet named: {string} and type of {string}, age {string} exists', (name, type,age) => {
  cy.url().should('be.equal', 'http://the-pettest-store.herokuapp.com/pet');
  const petCard = cy.get('.'+type+'>.pet').find('.card-title').contains(name).parent();
  petCard.find('.age').children().last().should('have.text', age);
  //cy.get('.'+type+'>.pet').find('.card-title').contains(name).should('exist');
});
Then('I verify the error message on pet creation page',() =>{
  cy.url().should('be.equal', 'http://the-pettest-store.herokuapp.com/pet/create');
  cy.contains('Set the correct age!').should('exist');
});


Given('I open the Petstore have an important pet freshly created', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
});
  
Then('I verify the tags of the newly created pet in previous step', () => {
  let name = 'Kutya';
  let type = 'dog';
  const petCard = cy.get('.'+type+'>.pet').find('.card-title').contains(name).parent();
  petCard.find('.badge-success').should('be.visible');
  petCard.parent().find('.badge-info').should('be.visible');
  //badge-success -- new
  //badge-info -- important
});


Given('I open the Petstore and modify pet', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
  let name = 'Kutya';
  let newName = 'Ujonc';
  let newType = 'cat';
  //enter detail page
  cy.get('.card-block')
  .find('.card-title')
  .contains(name)
  .parent()
  .find('.btn')
  .click();
  //enter edit page
  cy.get('.btn').contains('Edit').should('be.visible').click();
  cy.get('form').within(($form) => {
    cy.get('#name').clear().type(newName);
    cy.get('#type-'+newType).check();
    cy.get('.btn').contains('Save').should('be.visible').click();
  });
});
  
Then('I verify the Modifications made to the pet', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
  let newName = 'Ujonc';
  let newType = 'cat';
  const petCard = cy.get('.'+newType+'>.pet').find('.card-title').contains(newName).should('be.visible');
});


Given('I open the Petstore app and delete pet with name {string}', (name) => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
  cy.get('.card-block')
    .find('.card-title')
    .contains(name)
    .parent()
    .find('.btn')
    .click();
  cy.get('.btn').contains('Delete').should('be.visible').click();
});
  
Then('I verify the pet named: {string} and type of {string} is deleted', (name,type) => {
  cy.url().should('be.equal', 'http://the-pettest-store.herokuapp.com/pet');
  cy.get('.'+type+'>.pet').find('.card-title').contains(name).should('not.exist');
  //cy.get('.card-title').contains(name).should('not.exist');  only checks for name match
});


Given('I open the Petstore page click create pet then click cancel', () => {
  cy.visit('http://the-pettest-store.herokuapp.com/pet');
  cy.get('.nav-link').contains('Create a pet').click();
  cy.url().should('be.equal', 'http://the-pettest-store.herokuapp.com/pet/create');
  cy.get('.btn').contains('Cancel').click();

});
  
Then('I verify that i got redirected to the pet list page', () => {
  cy.url().should('be.equal', 'http://the-pettest-store.herokuapp.com/pet');
});