describe('Register User', () => {
    it('Test Case 1: Register User', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/login');

        cy.get('input[data-qa="signup-name"]').type('Lais');
        cy.get('input[data-qa="signup-email"]').type('lais@teste.com');
        cy.get('button[data-qa="signup-button"]').click();
        cy.url().should('include', '/signup');

        cy.get('input[id="id_gender2"]').check();
        cy.get('input[id="name"]').should('have.value', 'Lais');
        cy.get('input[id="email"]').should('have.value', 'lais@teste.com');

        cy.get('input[id="password"]').type('12345');
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
    });

    it('Test Case 2: Login User with correct email and password', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/login');

        cy.get('input[data-qa="login-email"]').type('lais@teste.com');
        cy.get('input[data-qa="login-password"]').type('12345');
        cy.get('button[data-qa="login-button"]').click();
        cy.contains('a', 'Logged in as Lais');
    });

    it('Test Case 3: Login User with incorrect email and password', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/login');

        cy.get('input[data-qa="login-email"]').type('lais@teste.com');
        cy.get('input[data-qa="login-password"]').type('senhaincorreta');
        cy.get('button[data-qa="login-button"]').click();
        cy.contains('p', 'Your email or password is incorrect!');
    });

    it('Test Case 4: Logout User', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/login');

        cy.get('input[data-qa="login-email"]').type('lais@teste.com');
        cy.get('input[data-qa="login-password"]').type('12345');
        cy.get('button[data-qa="login-button"]').click();
        cy.contains('a', 'Logged in as Lais');

        // Execução do Logout
        cy.get('a[href="/logout"]').click();
        cy.url().should('include', '/login');
    });

    it('Test Case 5: Register User with existing email', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/login"]').click();
        cy.url().should('include', '/login');

        cy.get('input[data-qa="signup-name"]').type('Lais');
        cy.get('input[data-qa="signup-email"]').type('lais@teste.com');
        cy.get('button[data-qa="signup-button"]').click();
        cy.url().should('include', '/signup');
        cy.contains('p', 'Email Address already exist!');
    });
});