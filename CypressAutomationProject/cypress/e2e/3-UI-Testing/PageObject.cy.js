///<reference types='cypress'/>

import login from '../4-PageObjectModel/login.cy.js'

describe('Page Object Model Test',()=>{

    it('validation POM',()=>{

        const lg = new login() //object Creation
        lg.visit()
        lg.fillUserName('mercury') //calling methods from login.cy page
        lg.fillPassWord('mercury')
        lg.submitButton()
    })
})