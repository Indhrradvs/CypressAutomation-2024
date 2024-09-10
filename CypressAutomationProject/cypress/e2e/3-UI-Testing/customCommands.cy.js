///<reference types='cypress'/>

/* Custom commands are used to Avoid duplication */
describe('Custom Commands',()=>{
    
    //I've added a custom commad code in support/commands.js. I will call that code here
    it('Custom validation',()=>{

        cy.login('mercury','mercury') //login property defined in commands.js file & we r calling here

        /** Explanation:
         * It is similar to Calling a method in Java. We can reduce code duplication & lines of code. 
         * By including login method/property we can avoid typing login code in every TC.
         * mercury & mercury are username & passwords mentioned 
         * in the login method located in support/commands.js
        **/
    })
})