/// <reference types="cypress" />

describe('table options', () => {

    

    it('should delete a teacher', () => {
        cy.visit('http://localhost:8080/');
        //cy.get('button').find('.btn btn-danger btn-delete m-1').click();//No se como encontrar el boton delete 
        //cy.get('button [title = "edit"]').click(); //find an element by attribute
        cy.get('tbody.btn btn-primary btn-edit m-1');

    })

    it('should update a teacher', () => {

    })
})

