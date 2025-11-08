describe('Register User', () => {
    const usuario = require('../fixtures/example.json');
    const nome = usuario.name;
    const email = usuario.email;

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.acessarTelaLogin();       
    });
    
    it('Test Case 1: Register User', () => {
        cy.get('h2').contains('New User Signup!');
        cy.get('input[data-qa="signup-name"]').type('newRegister');
        cy.get('input[data-qa="signup-email"]').type('newRegister@teste.com');
        cy.get('button[data-qa="signup-button"]').click();
        cy.url().should('include', '/signup');

        cy.contains('b', 'Enter Account Information');
        cy.get('input[id="id_gender2"]').check();
        cy.get('input[id="name"]').should('have.value', 'newRegister');
        cy.get('input[id="email"]').should('have.value', 'newRegister@teste.com');

        cy.get('input[id="password"]').type('12345');
        cy.get('select[id="days"]').select('24');
        cy.get('select[id="months"]').select('December');
        cy.get('select[id="years"]').select('1998');

        cy.get('input[id="first_name"]').type('newRegister');
        cy.get('input[id="last_name"]').type('Teste');
        cy.get('input[id="company"]').type('PosTeste');
        cy.get('input[id="address1"]').type('Rua teste, 123');
        cy.get('select[id="country"]').select('Canada');
        cy.get('input[id="state"]').type('Estado teste');
        cy.get('input[id="city"]').type('Cidade teste');
        cy.get('input[id="zipcode"]').type('29112170');
        cy.get('input[id="mobile_number"]').type('27999999999');
        cy.get('button[data-qa="create-account"]').click();

        cy.url().should('include', '/account_created');
        cy.contains('b', 'Account Created!');

        cy.get('a[data-qa="continue-button"]').click();
        cy.contains('a', 'Logged in as newRegister');

        cy.get('a[href="/delete_account"]').click();
        cy.url().should('include', '/delete_account');
        cy.contains('b', 'Account Deleted!');
        cy.get('a[data-qa="continue-button"]').click();
    });

    it('Test Case 5: Register User with existing email', () => {
        cy.get('h2').contains('New User Signup!');

        cy.get('input[data-qa="signup-name"]').type(nome);
        cy.get('input[data-qa="signup-email"]').type(email);
        cy.get('button[data-qa="signup-button"]').click();
        cy.url().should('include', '/signup');
        cy.contains('p', 'Email Address already exist!');
    });
});

/* 
    it('Test Case 6: Contact Us Form', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/contact_us"]').click();
        cy.url().should('include', '/contact_us');
        cy.contains('h2', 'Get In Touch');

        cy.get('input[name="name"]').type('Lais Alvarenga');
        cy.get('input[name="email"]').type('lais@teste.com');
        cy.get('input[name="subject"]').type('Subject de teste.');
        cy.get('textarea[name="message"]').type('Este é um teste de envio de mensagem pelo formulário de contato.');

        // Upload de arquivo
    });
*/