context('Youtube', () => {

    it('Entrar a Youtube', () => {

        cy.visit('https://www.google.com/');

        cy.get('.gLFyf').type('Youtube');

        cy.get('.FPdoLc > center > .gNO89b').click({force: true});

        cy.get('[href="https://www.youtube.com/?hl=es&gl=ES"] > .LC20lb').click();

    });

});