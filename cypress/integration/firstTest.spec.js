/// <reference types="cypress" />
describe('User should be able', () => {
    let user;
  
    before(function () {
      cy.task("freshUser").then((freshUser) => {
          user = freshUser;
      });
    });

    it('to login with existing data', () => {
      cy.visit('https://react-redux.realworld.io/#/login?_k=ve6th8');
      cy.get(':nth-child(1) > .form-control').type('firstcypress@i.ua')
      .should('have.value', 'firstcypress@i.ua');
      cy.get(':nth-child(2) > .form-control').type('Qwerty@123')
      .should('have.value', 'Qwerty@123');
      cy.get('.btn').click();
      cy.get(':nth-child(4) > .nav-link').should('contain', 'firstcypress');
    })

    it('to register after entering new data', () => {
        cy.visit('https://react-redux.realworld.io/#/register?_k=luy0fu');
        cy.get(':nth-child(1) > .form-control').type(user.username).should('have.value', user.username);
        cy.get(':nth-child(2) > .form-control').type(user.email).should('have.value', user.email);
        cy.get(':nth-child(3) > .form-control').type(user.password).should('have.value', user.password);
        cy.get('.btn').click();
        
        cy.get(':nth-child(4) > .nav-link').should('contain', user.username);
      })
    })
  