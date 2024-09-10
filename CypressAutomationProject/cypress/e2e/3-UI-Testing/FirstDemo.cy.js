/// <reference types = 'cypress'/>

describe('First Suite Creation',() => {

    it('Verifying Google Title', ()=> {
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
    })

    it('Verifying not equal Google Title', ()=> {
        cy.visit('https://www.google.com/')
        cy.title().should('not.eq','Google1')
    })
})

