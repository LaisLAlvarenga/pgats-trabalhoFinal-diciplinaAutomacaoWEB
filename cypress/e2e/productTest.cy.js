/// <reference types="cypress" />

describe('Products', () => {
    const usuario = require('../fixtures/example.json');
    const email = usuario.email;
    const senha = usuario.password;

    beforeEach(() => {
        //cy.viewport('iphone-xr')
        cy.visit('https://automationexercise.com/');
        cy.acessarTelaLogin();
        cy.login(email, senha);       
    });
    
    it('Test Case 8: Verify All Products and product detail page', () => {
        cy.get('a[href="/products"]').click();
        cy.url().should('include', '/products');

        cy.get('.features_items').should('be.visible');
        cy.get('a[href="/product_details/1"]').click();
        cy.url().should('include', '/product_details/1');
        cy.get('.product-information').should('be.visible');
    });

    it('Test Case 9: Search Product', () => {
        cy.get('a[href="/products"]').click();
        cy.url().should('include', '/products');

        cy.get('.features_items').should('be.visible');
        cy.get('input#search_product').type('Blue Top');
        cy.get('button#submit_search').click();   
        cy.contains('h2', 'Searched Products');
        cy.get('.single-products').should('be.visible');
    });

    it('Test Case 10: Verify Subscription in home page', () => {});

    it('Test Case 15: Place Order: Register before Checkout', () => {});   
});
    