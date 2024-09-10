///<reference types='cypress'/>

describe('Handling Hidden Fields',()=>{

    it('Hidden Fields',()=>{

        cy.visit('https://www.amazon.com/')
        cy.get('#nav-flyout-ya-signin').invoke('show')
        cy.contains('Sign in').click({force: true})
    })

})