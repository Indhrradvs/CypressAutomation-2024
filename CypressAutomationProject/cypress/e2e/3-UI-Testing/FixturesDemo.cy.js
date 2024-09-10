///<reference types='cypress'/>


const data = require('../../fixtures/MyTestData.json') //providing JSON path where we stored our data

describe('Data Driven Test',function(){
    
    //Method-1
    it('Verifying Data Driven Method-1',function(){

        cy.visit('https://demo.guru99.com/test/newtours/')
        cy.get('input[name=userName]').type(data.userName)
        cy.get('input[name=password]').type(data.passWord)
        cy.get('input[name=submit]').click()
    })

    //Method-2: To make sure this method to work then comment the //const data line
    it('Verifying Data Driven method-2',function(){
        cy.fixture('MyTestData.json').then((hi)=>{   //hi-> parameter, you can give any name
            cy.visit('https://demo.guru99.com/test/newtours/')
            cy.get('input[name=userName]').type(hi.userName)
            cy.get('input[name=password]').type(hi.passWord)
            cy.get('input[name=submit]').click()
        })
        
    })
})