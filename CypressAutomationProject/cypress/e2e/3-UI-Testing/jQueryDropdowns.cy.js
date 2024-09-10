///<reference types ='cypress'/>

describe('Validating JQuery mutlti select Dropdowns',()=>{

    it('jQuery dropdown',()=>{

        cy.visit('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree')
        cy.get('#justAnInputBox').click()
        cy.get('.comboTreeItemTitle').contains('choice 1').click()
        cy.get('.comboTreeItemTitle').contains('choice 2 2').click()
        cy.get('.comboTreeItemTitle').contains('choice 4').click()
        cy.get('.comboTreeItemTitle').contains('choice 5').click()

    })


})