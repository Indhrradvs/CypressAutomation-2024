///<reference types='cypress'/>

import 'cypress-iframe'

describe('Frames', function(){

    it('Handling Frames', function(){

        cy.visit('https://jqueryui.com/droppable/')

        cy.frameLoaded('.demo-frame') // Switched to Frame

        //Handling inside the frames
        cy.iframe().find('#draggable').then(function(test){
            const frm = test.text() //storing the text into the frm
            expect(frm).to.contain('Drag me to my target') //verifying the text
            cy.log(frm)  //printing in the console, we can see text in spec file while running
        })


    })
})