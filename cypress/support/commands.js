Cypress.Commands.add('acessarTelaLogin', () => {
    cy.get('a[href="/login"]').click();
    cy.url().should('include', '/login');
});

Cypress.Commands.add('login', (email, password) => {
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add('registerUser', (name, email, password) => {
    cy.get('h2').contains('New User Signup!');
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
    cy.url().should('include', '/signup');

    cy.contains('b', 'Enter Account Information');
    cy.get('input[id="id_gender2"]').check();
    cy.get('input[id="name"]').should('have.value', name);
    cy.get('input[id="email"]').should('have.value', email);

    cy.get('input[id="password"]').type(password);
    cy.get('select[id="days"]').select('24');
    cy.get('select[id="months"]').select('December');
    cy.get('select[id="years"]').select('1998');

    cy.get('input[id="first_name"]').type('Lais');
    cy.get('input[id="last_name"]').type('Alvarenga');
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

    // Limpar a sessão
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload();
});

Cypress.Commands.add('deleteAccount', () => {
    cy.get('a[href="/delete_account"]').click();
    cy.url().should('include', '/delete_account');
    cy.contains('b', 'Account Deleted!');
    cy.get('a[data-qa="continue-button"]').click();
});
