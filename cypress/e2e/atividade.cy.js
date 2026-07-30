/// <reference types="cypress" />


describe('Funcionalidade: Administrar Reservas de livros', () => {
    //cenário positivo
    it('Deve exibir as reservas via intercept', () => {
        cy.loginApp(
            Cypress.env('USER_EMAIL'),
            Cypress.env('USER_SENHA')
        )
        cy.fixture('reservas').then((dadosReserva) => {
            cy.intercept('GET', 'api/reservations', {
                statusCode: 200,
                body: dadosReserva
            }).as('listarReservas')
            cy.visit('dashboard.html')
            cy.wait('@listarReservas')
            cy.get('.badge.bg-success').should('contain', 'Ativa')
        })
    })
    //cenário negativo
    it('Não deve exibir reservas quando não houver nenhuma', () => {
        cy.loginApp(
            Cypress.env('USER_EMAIL'),
            Cypress.env('USER_SENHA')
        )
        cy.intercept('GET', 'api/reservations', {
            statusCode: 200,
            body: []
        }).as('listarReservasVazio')
        cy.visit('dashboard.html')
        cy.wait('@listarReservasVazio')
        cy.contains('Nenhuma reserva').should('be.visible')
    })
})

describe('Um cenário com uma funcionalidade em AppActions', () => {
    it('Deve acessar o dashboard utilizando loginApp', () => {
        cy.loginApp(
            Cypress.env('USER_EMAIL'),
            Cypress.env('USER_SENHA')
        )
        cy.get('h4').should('contain', 'Olá')
    })
})