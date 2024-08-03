///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('Sprodutos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        // .first()
         //.last()
          .eq(1)
         //.contains('Arcadio Gym Short')
         .click() 
         cy.get('product block').should('contain', 'Need an everyday action tee that helps keep you dry? ')

          });
});