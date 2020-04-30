context('Twitter', () => {

    it('Entrar a Twitter', () => {

        cy.visit('https://www.google.com/');

        cy.get('.gLFyf').type('Twitter');

        cy.get('.FPdoLc > center > .gNO89b').click({force: true});

        cy.get('[href="https://twitter.com/?lang=es"] > .LC20lb').click();

    });

});