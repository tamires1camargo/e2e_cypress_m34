/// <reference types="cypress" />

describe('Testes da agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir primeiro contato', () => {
        cy.get('input[type="text"]').type('Tamires Camargo Soares')
        cy.get('input[type="email"]').type('tamires.camargo.soares@gmail.com')
        cy.get('input[type="tel"]').type('(11)95003-4955')
        cy.get('button[type="submit"]').click()
    })

    it('Deve incluir segundo contato', () => {
        cy.get('input[type="text"]').type('Maria Fernanda')
        cy.get('input[type="email"]').type('mariafernanda@gmail.com')
        cy.get('input[type="tel"]').type('(11)91000-1234')
        cy.get('button[type="submit"]').click()
    })

    it('Deve incluir terceiro contato', () => {
        cy.get('input[type="text"]').type('Felipe de Souza')
        cy.get('input[type="email"]').type('felipe_souza@gmail.com')
        cy.get('input[type="tel"]').type('(11)92000-0000')
        cy.get('button[type="submit"]').click()
    })

    it('Deve incluir quarto contato', () => {
        cy.get('input[type="text"]').type('Tamires Camargo Soares')
        cy.get('input[type="email"]').type('tamires.camargo.soares@gmail.com')
        cy.get('input[type="tel"]').type('(11)95003-4955')
        cy.get('button[type="submit"]').click()
    })

    it('Deve alterar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input[type="text"]').type('Jose da Silva')
        cy.get('input[type="email"]').type('jose@gmail.com')
        cy.get('input[type="tel"]').type('(11)99999-1234')
        cy.get('.alterar').click()
    })

    it('Deve remover contatos', () => {
        cy.get(':nth-child(7) > .sc-gueYoa > .delete').click()
    })
})