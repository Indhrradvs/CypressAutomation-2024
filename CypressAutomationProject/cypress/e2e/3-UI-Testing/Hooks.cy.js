///<reference types='cypress'/>

describe('Hooks',function(){

    before(()=>{
        cy.log('Before Suite')
    })

    after(()=>{
        cy.log('After Suite')
    })

    beforeEach(()=>{
        cy.log('BeforeEach TestCase')
    })

    afterEach(()=>{
        cy.log('BeforeEach TestCase')
    })


    it('Test case-1',function(){
        cy.log('First Test Case executed')
    })
    it('Test case-2',function(){
        cy.log('Second Test Case executed')
    })
    it('Test case-3',function(){
        cy.log('Third Test Case executed')
    })
})