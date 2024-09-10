///<reference types ='cypress' />

describe('verifying Checkbox', () => {

    it('checkbox validation', () => {

        cy.visit('https://seleniumelements.blogspot.com')
        cy.get('#sunday').check().should('be.checked').and('have.value', 'sunday')
        cy.get('[value=wednesday]').check().should('be.checked').and('have.value', 'wednesday')
        cy.get('[value=saturday]').check().should('be.checked').and('have.value', 'saturday') // checked & validated
        cy.get('#saturday').uncheck().should('not.be.checked').and('have.value', 'saturday') //unchecked & validated

        //If we want to select Multiple checkboxes with same Attribute value by Passing values as Array
        cy.get('[type=checkbox]').check(['thursday','friday', 'saturday'])

    })

})