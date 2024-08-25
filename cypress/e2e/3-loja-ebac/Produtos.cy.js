///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.VisitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aero Daily Fitness Tee')
        cy.get('#tab-title-description > a').should('contain','Descrição')

    });

    it('Deve buscar um produto com sucesso', () => {
        let produto='Abominable Hoodie'
        produtosPage.buscarProdutos(produto)
        cy.get('.product_title').should('contain',produto)

    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Abominable-Hoodie')
        cy.get('.product_title').should('contain','Abominable Hoodie')


    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProdutos('Aero Daily Fitness Tee')
        produtosPage.addProdutoCarrinho('S','Brown', qtd)
        cy.get('.woocommerce-message').should('contain', '“Aero Daily Fitness Tee” foi adicionado no seu carrinho.')

    });
    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
       cy.fixture('produtos').then(dados=>{
        produtosPage.buscarProdutos(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho,
            dados[0].cor,
            dados[0].quantidade)
            cy.get('.product_title').should('contain', dados[0].nomeProduto)

       })
        

    });




});