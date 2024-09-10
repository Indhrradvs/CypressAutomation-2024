///<reference types='cypress'/>

describe('Verifying Table values', function () {

    it('validate', function () {
        cy.visit('https://seleniumelements.blogspot.com/')

        cy.get('table[name="BookTable"]').should('be.visible') //verifying table visibility

        //verifying values from the table 
        cy.get('table[name="BookTable"]').contains('td', 'Mastering Java')
        cy.get('table[name="BookTable"]').contains('th', 'Price').should('be.visible')
        cy.get('table[name="BookTable"]').contains('td', 'John')
        cy.get('table[name="BookTable"]>tbody > tr:nth-child(5) > td:nth-child(3)').contains('td', 'Cloud Computing')

        //Condition Validation
        cy.get('table[name="BookTable"]>tbody > tr:nth-child(7) > td:nth-child(2)').each(($e, index, $list) => {
            const text = $e.text() //Retrieving 'Jessica' into $e and then stores values into text

            if (text.includes('Jessica')) {

                cy.get('table[name="BookTable"]>tbody > tr:nth-child(7) > td:nth-child(1)').eq(index).then(function (bname) {
                    const bookName = bname.text() //Retrieving 'JavaScript in Depth' into bname and then stores values into bookName
                    expect(bookName).to.eq('JavaScript in Depth') //Verifying the Name
                })

            }

        })



    })
})