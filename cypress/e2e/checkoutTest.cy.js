describe('Checkout', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.acessarTelaLogin();
    });

    it('Test Case 15: Place Order: Register before Checkout', () => {
        cy.registerUser('Afrodite', 'afrodite@teste.com', 'senha123');
        cy.acessarTelaLogin();
        cy.login('afrodite@teste.com', 'senha123');
        cy.contains('a', `Logged in as Afrodite`);

        cy.get('a[href="/products"]').click();
        cy.url().should('include', '/products');
        cy.get('[data-product-id="1"]').contains('Add to cart').click();
        cy.contains('p', 'Your product has been added to cart.');
        cy.contains('button', 'Continue Shopping').click();

        cy.get('a[href="/view_cart"]').click();
        cy.url().should('include', '/view_cart');
        cy.contains('a', 'Proceed To Checkout').click();
        
        cy.get('textarea[name="message"]').type('Mensagem de teste para o pedido.');
        cy.get('a[href="/payment"]').click();
        cy.url().should('include', '/payment');

        cy.get('input[name="name_on_card"]').type('Lais Teste');
        cy.get('input[name="card_number"]').type('4111111111111111');
        cy.get('input[name="cvc"]').type('123');
        cy.get('input[name="expiry_month"]').type('12');
        cy.get('input[name="expiry_year"]').type('2025');
        cy.get('button#submit').click();    
        cy.contains('b', 'Order Placed!');

        cy.deleteAccount();
    });   
});