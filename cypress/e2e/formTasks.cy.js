/// <reference types="cypress" />

describe('form tasks', () => {

  it('should validate if there are not teachers', (  ) => {// I think it needs a precondition to check if there are not teachers before
    cy.visit('http://localhost:8080/');
    cy.get('tbody td').contains('Not records saved');
    cy.get('tbody tr').should('have.length', 0);//quiero validar que no cree un teacher pero no se como. necesito un AND para validar este y el previous step

  })

  it('should create a new teacher', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#txtName').type('rayffer rua');
    cy.get('#txtDescription').type('New description');
    cy.get('#txtEmail').type('rayffer@rayffer.com');
    cy.get('#birthDate').type('11151985');
    cy.get('.btn btn-success').click();
    //Missing assertion for the created teacher 
    //Missing assertion for the alert
    //Missing assertion for resetting the form
  });

  it('should create a multiple teachers', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#txtName').type('rayffer rua');
    cy.get('#txtDescription').type('New description');
    cy.get('#txtEmail').type('rayffer@rayffer.com');
    cy.get('#birthDate').type('11151985');
    cy.get('.btn btn-success').click();
    //cy.get('element').should('have.length', 1)
    //Missing assertion for the created teacher 
    //Missing assertion for the alert
    //Missing assertion for resetting the form
    //need to create a second teacher
    // cy.get('#txtName').type('Rayffer 2');
    // cy.get('#txtDescription').type('second description');
    // cy.get('#txtEmail').type('rayffer2@rayffer.com');
    // cy.get('#birthDate').type('11151985');
    // cy.get('.btn btn-success').click();
    //cy.get('element').should('have.length', 2)
    //cy.get('element').eq(0).contains('rayffer 1')// first()
    //cy.get('element').eq(0).contains('rayffer 2')// second()
  });

  it('should reset the form through cancel button', () => {
    cy.visit('http://localhost:8080/');
    cy.get('#txtName').type('rayffer rua');
    cy.get('#txtDescription').type('New description');
    cy.get('#txtEmail').type('rayffer@rayffer.com');
    cy.get('#birthDate').type('11151985');
    cy.get('#btnCancel').click();
    //Missing assertion for resetting the form   -  need to validate that each field is empty
    //cy.get('tbody td').contains('Not records saved');
    //Missing assertion to validate nothing was created

  })

  it('should validate user input - Required fields', ( ) => {
    cy.visit('http://localhost:8080/');
    cy.get('#btnSubmit').click();
    cy.get('#txtNameRequired').contains('Name is mandatory');
    cy.get('#txtDescriptionRequired').contains('A description is mandatory');
    cy.get('#txtEmailPattern').contains('Please write a valid email. i.e. example@domain.com');
    cy.get('#txtEmailRequired').contains('Email is mandatory');
    cy.get('#birthDateRequired').contains('BirthDate is mandatory');
    cy.get('form.form-control is-invalid').should('have.length', 4);// needs to be fixed
  })

  


});
