/// <reference types='cypress' />

const baseUrl = 'https://seleniumelements.blogspot.com'
describe('Alerts Handling', () => {

    it('Alert - Simple', () => {
        cy.visit(baseUrl)
        cy.get('[onclick="myFunctionAlert()"]').click()

        /* Validating the Alert text message by storing into str and performing assertion
           window:alert -> Method */
        cy.on('window:alert', (str) => {
            expect(str).to.eq('I am an alert box!')
        })

    })

    it('Alert - Confirm', () => {
        cy.visit(baseUrl)

        //Confirm Box- OK Button
        cy.get('[onclick="myFunctionConfirm()"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Press a button!')
        })

        //Confirm Box - Cancel Button 
        cy.on('window:confirm', (str) => {
            return false //clicks cancel button
        })
        cy.get('#demo').should('have.text', 'You pressed Cancel!')
        cy.get('[onclick="myFunctionConfirm()"]').click()

    })

    it('Alert - Prompt', () => {
        cy.visit(baseUrl)

    //A stub is a way to modify a function and delegate control over its behavior to you (the programmer).
    //A stub is most commonly used in a unit test but is still useful during some integration / e2e tests. 

        cy.window().then(function(test){
            cy.stub(test, 'prompt').returns('Venkat')
            cy.get('[onclick="myFunctionPrompt()"]').click()
            cy.get('#demo').contains('Hello Venkat! How are you today?')
        })

    })
})