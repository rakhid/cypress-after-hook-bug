describe('Cypress with Select 2', () => {
    afterEach(function() {
        for (let step = 0; step < 3; step + 1) {
            cy.log('the loop is not the problem');
        }
    });
    it('Should trigger the dropdown', () => {
        cy.visit('/');
        cy.get('#s2id_e1').should('not.have.class', 'select2-dropdown-open');
        cy.get('#s2id_e1').click();
        cy.get('#s2id_e1').should('have.class', 'select2-dropdown-open');
    });
});