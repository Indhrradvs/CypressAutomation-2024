///<reference types='cypress'/>

describe('Handling Tabs', () => {

    it('Verify Tabs', () => {
        cy.visit('https://seleniumelements.blogspot.com')
        cy.get('[onclick="myFunction()"]').invoke('removeAttr','target').click() // delete target attribute with invoke for link
        cy.url().should('include','https://seleniumelements.blogspot.com') // verify tab url
        cy.go('back')// shift to parent window
           
    })

})