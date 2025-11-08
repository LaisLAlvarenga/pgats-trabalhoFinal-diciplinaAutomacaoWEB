describe('Contact Us', () => {
    const usuario = require('../fixtures/example.json');
    const email = usuario.email;
    const senha = usuario.password;

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.acessarTelaLogin();
        cy.login(email, senha);       
    });
    
    it('Test Case 6: Contact Us Form', () => {
        cy.get('a[href="/contact_us"]').click();
        cy.url().should('include', '/contact_us');
        cy.contains('h2', 'Get In Touch');

        cy.get('input[name="name"]').type('Lais Alvarenga');
        cy.get('input[name="email"]').type('lais@teste.com');
        cy.get('input[name="subject"]').type('Subject de teste.');
        cy.get('textarea[name="message"]').type('Este é um teste de envio de mensagem pelo formulário de contato.');

        // Upload de arquivo
    });
});
    