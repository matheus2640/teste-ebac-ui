///<reference types="cypress"/>

describe('funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

    });

    afterEach(() => {
        cy.screenshot()
    });

it('deve fazer login com sucesso', () => { 
     cy.get('#username').type('matheus1020@gmail.com')
     cy.get('#password').type('teste1234')
     cy.get('.woocommerce-form > .button').click()
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, matheus1020 (não é matheus1020? Sair')
     })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
     cy.get('#username').type('matheus@gmail.com')
     cy.get('#password').type('teste1234')
     cy.get('.woocommerce-form > .button').click()
     cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido.')
     cy.get('.woocommerce-error').should('exist')
  }); 
  
  it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
    cy.get('#username').type('matheus1020@gmail.com')
    cy.get('#password').type('teste12345')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain' , 'Erro: A senha fornecida para o e-mail matheus1020@gmail.com está incorreta. Perdeu a senha?')
    cy.get('.woocommerce-error').should('exist')
  });

    
});