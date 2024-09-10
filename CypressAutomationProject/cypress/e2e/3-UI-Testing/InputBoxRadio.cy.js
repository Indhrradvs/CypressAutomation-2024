///<reference types='cypress'/>

describe('Input Box and Radio Buttons', () => {

    it('Input Box validation', () => {

        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.title().should('eq', 'Welcome: Mercury Tours') //Title validation
        cy.get('[name=userName]').should('be.enabled').should('be.visible').type('mercury')
        cy.get('[name=password]').should('be.enabled').should('be.visible').type('mercury')
        cy.get('[name=submit]').click()
        cy.title().should('eq', 'Login: Mercury Tours')
    })

    it('Radio button validation', () => {

        cy.visit('https://demo.guru99.com/test/newtours/reservation.php')
        cy.get('[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('[value=oneway]').should('be.visible').should('not.be.checked').check().should('be.checked')
        cy.get('[value=roundtrip]').should('be.visible').should('not.be.checked')
    })

})