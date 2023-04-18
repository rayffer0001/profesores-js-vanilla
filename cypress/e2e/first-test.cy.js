describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/');
    cy.get('article').should('have.length', 2);
    cy.get('input').should('have.length', 3);
    cy.get('textarea').should('have.length', 1);
    cy.get('button').should('have.length', 4);
    cy.get('table').should('have.length', 1);
  });
});

