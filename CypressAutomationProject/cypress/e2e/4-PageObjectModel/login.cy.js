class loginPage{

  //Methods
  visit(){
    cy.visit('https://demo.guru99.com/test/newtours/')
  }  

  fillUserName(userName){
    const name = cy.get('input[name=userName]')
    name.clear()
    name.type(userName)
    return this
  }

  fillPassWord(passWord){
    const pwd = cy.get('input[name=password]')
    pwd.clear()
    pwd.type(passWord)
    return this
  }

  submitButton(){
    cy.get('input[name=submit]').click()
  }

}

export default loginPage