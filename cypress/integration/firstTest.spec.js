/// <reference types="cypress" />
describe('User should be able', () => {
    it('to login with existing data', () => {
      cy.visit('https://react-redux.realworld.io/#/login?_k=ve6th8');
      cy.get(':nth-child(1) > .form-control').type('firstcypress@i.ua')
      .should('have.value', 'firstcypress@i.ua');
      cy.get(':nth-child(2) > .form-control').type('Qwerty@123')
      .should('have.value', 'Qwerty@123');
      cy.get('.btn').click();
      cy.get(':nth-child(4) > .nav-link').should('contain', 'firstcypress');
    })
  })