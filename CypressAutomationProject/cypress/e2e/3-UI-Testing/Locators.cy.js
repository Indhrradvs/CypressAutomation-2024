/// <reference types = 'cypress'/>

describe('Verifying CSS Locators', () => {

    it('Verifying element by ATTRIBUTE locator on GooglePage',() => {

        cy.visit('https://www.google.com/')
        //cy.get('[name=q]').type('Aston Martin') //locator-1: [attribute=value]
        cy.get('.gLFyf[name=q]').type('Aston Martin') //locator-2: .classValue[attribute=value]
    })

    it('Verifying Class Locators', () => {

        cy.visit('https://seleniumelements.blogspot.com')
        cy.get('.hasDatepicker').type('8/6/2024') //locator-3: Class [.classValue]
        cy.get('#name').type('Charlie Harper') //locator-4: ID [#idValue]
        cy.get('#email').type('charlieharper@cbs.com')
        cy.get('#phone').type('123-456-789')
        cy.get('#textarea').type('Washington D.C')
        cy.get('#male').click()
        cy.get('#sunday').click()
        cy.get('#tuesday').click()
        cy.get('#saturday').click()
        
    }) 

})