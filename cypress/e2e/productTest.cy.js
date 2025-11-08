describe('Products', () => {
    const usuario = require('../fixtures/example.json');
    const email = usuario.email;
    const senha = usuario.password;

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.acessarTelaLogin();
        cy.login(email, senha);       
    });
    
    it('Test Case 8: Verify All Products and product detail page', () => {});

    it('Test Case 9: Search Product', () => {});

    it('Test Case 10: Verify Subscription in home page', () => {});

    it('Test Case 15: Place Order: Register before Checkout', () => {});   
});
    