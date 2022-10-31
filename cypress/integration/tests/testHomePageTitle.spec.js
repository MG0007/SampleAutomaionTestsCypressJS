/// <reference types="cypress" />

it('should verify title text of herokuapp website', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.title().should('eq', 'The Internet');
});

it('should verify doc title text', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('h1.heading').then((e) => {
        const text = e.text();
        expect(text).to.contains('Welcome to the-internet');
    })
});

it('should verify doc title font size', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('h1.heading').should('have.css', 'font-size', '44px');
});

it('should verify doc title font color', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('h1.heading').should('have.css', 'color', 'rgb(34, 34, 34)');
});

it('should verify doc subtitle text', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.get('h2').then((e) => {
        const text = e.text();
        expect(text).to.contains('Available Examples');
    })
});

it('should verify sub-title verical alignment', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    let titleCoordinates = cy.get('h1.heading').then((e) => {
        e[0].getBoundingClientRect().x;
    });

    let subTitleCoordinate = cy.get('h2').then((e) => {
        e[0].getBoundingClientRect().x;
        cy.task('log', subTitleCoordinate);
    });
});



