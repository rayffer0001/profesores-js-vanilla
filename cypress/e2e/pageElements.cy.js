/// <reference types="cypress" />
// cy.get('img'); find an element by tag
// cy.get('.class-name'); find an element by class name
// cy.get('#some-id'); find an element by id
// cy.get('[type = "text"]'); find an element by attribute

describe('Page Elements', () => {

  it('should have page title', (  ) => {
    cy.visit('http://localhost:8080/');
    cy.get('h1').should('have.length', 1);
    cy.get('h1').contains('Teachers');
    //cy.contains('Teachers');
  })

  it('should render the main image', (  ) => {
    cy.visit('http://localhost:8080/');
    //cy.get('.container').find('img');
    //cy.get('.container img');
    cy.get('#main-img');
  });
  
  it('should have a form, with four fields and two buttons', ( ) => {
    cy.visit('http://localhost:8080/');
    cy.get('form').should('have.length', 1);
    cy.get('input').should('have.length', 3);
    cy.get('textarea').should('have.length', 1);
    cy.get('#btnSubmit').should('have.length', 1);
    cy.get('#btnCancel').should('have.length', 1);
  })

  it('should have a table with six columns', ( ) => {
    cy.visit('http://localhost:8080/');
    cy.get('table').should('have.length', 1);
    cy.get('thead th').should('have.length', 6);
  })
  it('should have a footer', ( ) => {
    cy.visit('http://localhost:8080/');
    cy.get('footer').should('have.length', 1).contains('Copy Right');
  })
});





// describe('Form Elements', () => {
//   it('Validate all elements on the page', () => {
//     cy.visit('http://localhost:8080/');
    
//     cy.get('table').should('have.length', 1);
//     cy.get('img')
//   });
// });



