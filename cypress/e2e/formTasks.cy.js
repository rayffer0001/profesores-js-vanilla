/// <reference types="cypress" />

describe('form tasks', () => {
  it('should create a new teacher', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#txtName').type('rayffer rua');
    cy.get('#txtDescription').type('New description');
    cy.get('#txtEmail').type('rayffer@rayffer.com');
    cy.get('#birthDate').type('11151985');
    cy.get('.btn btn-success').click();
    //Missing assertion for the created teacher 
    //Missing assertion for resetting the form
  });

  it('should reset the form through cancel button', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#txtName').type('rayffer rua');
    cy.get('#txtDescription').type('New description');
    cy.get('#txtEmail').type('rayffer@rayffer.com');
    cy.get('#birthDate').type('11151985');
    cy.get('#btnCancel').click();
    //Missing assertion for resetting the form
    //Missing assertion to validate nothing was created
  })

  it('should validate user input - Required fields', ( ) => {
    cy.visit('http://localhost:8080/');
    cy.get('#btnSubmit').click();
    cy.get('#txtNameRequired').contains('Name is mandatory');
    cy.get('#txtDescriptionRequired').contains('A description is mandatory');
    cy.get('#txtEmailRequired').contains('Email is mandatory');
    cy.get('#birthDateRequired').contains('BirthDate is mandatory');
    cy.get('textarea.form-control is-invalid').should('have.length', 4);
  })


});
