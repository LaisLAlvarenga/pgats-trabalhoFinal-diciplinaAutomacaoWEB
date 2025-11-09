describe('Subscription', () => {
    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
    });
    
    it('Test Case 10: Verify Subscription in home page', () => {
        cy.get('#footer').scrollIntoView();
        cy.get('h2').contains('Subscription');
        cy.get('input#susbscribe_email').type('laisTeste@example.com');
        cy.get('button#subscribe').click();
        cy.get('.alert-success')
            .should('be.visible')
            .and('contain', 'You have been successfully subscribed!');
    });
});