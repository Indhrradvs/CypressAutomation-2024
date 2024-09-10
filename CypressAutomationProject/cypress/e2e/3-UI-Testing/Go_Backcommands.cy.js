///<reference types='cypress'/>

describe('Go,Back commands',()=>{

    it('Verify GO,BACK command',()=>{

        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.title().should('eq','Welcome: Mercury Tours')
        cy.contains('REGISTER').click()
        cy.title().should('eq','Register: Mercury Tours')
        cy.go('back')
        cy.title().should('eq','Welcome: Mercury Tours')
        cy.go('forward')
        cy.title().should('eq','Register: Mercury Tours')
        cy.go(-1) //-1 = Back
        cy.title().should('eq','Welcome: Mercury Tours')
        cy.go(1) // 1 = Forward
        cy.title().should('eq','Register: Mercury Tours')
    })
})