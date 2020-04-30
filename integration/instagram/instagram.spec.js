context('Instagram', () => {

    it('Entrar a Instagram', () => {

        cy.visit('https://www.google.com/');

        cy.get('.gLFyf').type('Instagram');

        cy.get('.FPdoLc > center > .gNO89b').click({force: true});

        cy.get('[href="https://www.instagram.com/?hl=es"] > .LC20lb').click();

    });

});