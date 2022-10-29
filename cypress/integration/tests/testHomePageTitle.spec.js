/// <reference types="cypress" />

it('should verify title of herokuapp website', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.title().should('eq', 'The Internet');
});

it('should verify doc title', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('h1.heading').then((e) => {
        const text = e.text();
        expect(text).to.contains('Welcome to the-internet');
    })
});