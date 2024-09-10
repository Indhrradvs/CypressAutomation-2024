///<reference types='cypress'/>

import 'cypress-iframe'

describe('Date',()=>{
  
    it('Date Picker',()=>{
        cy.visit('https://jqueryui.com/datepicker/')

        cy.frameLoaded('.demo-frame')//switched to frame

        cy.iframe().find('#datepicker').type('08/15/2024') //Entering date into iframe Date field
    })
})