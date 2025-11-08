describe('Login', () => {
    const usuario = require('../fixtures/example.json');
    const nome = usuario.name;
    const email = usuario.email;
    const senha = usuario.password;

    beforeEach(() => {
        cy.visit('https://automationexercise.com/');
        cy.acessarTelaLogin();
        cy.get('h2').contains('Login to your account');        
    });

    it('Test Case 2: Login User with correct email and password', () => {
        cy.registerUser('LaisTeste', 'testeLais@teste.com', '159951');
        cy.acessarTelaLogin();
        cy.login('testeLais@teste.com', '159951');
        cy.contains('a', `Logged in as LaisTeste`);
        cy.deleteAccount();
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.acessarTelaLogin();
        cy.get('h2').contains('Login to your account');

        cy.login(email, 'senhaincorreta');
        cy.contains('p', 'Your email or password is incorrect!');
    });

    it('Test Case 4: Logout User', () => {
        cy.login(email, senha);
        cy.contains('a', `Logged in as ${nome}`);

        // Execução do Logout
        cy.get('a[href="/logout"]').click();
        cy.url().should('include', '/login');
    });   
});