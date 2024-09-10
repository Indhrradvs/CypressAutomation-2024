///<reference types ='cypress'/>

const baseUrl = 'https://seleniumelements.blogspot.com'

describe('Verifying Dropdowns', () => {

    it('Single Dropdown', () => {
        cy.visit(baseUrl)
        cy.get('#country').select('India') //Entered Visible Text value japan
        cy.get('#country').select('japan') //Entered option value 
    })

    it('Multi dropdowns', () => {
        cy.visit(baseUrl)
        cy.get('#colors').select(['Blue', 'Green', 'White']) //Passing values as Array
    })
})