// <reference types="cypress" />
import { loginpage } from "../support/pom/login" 
import { testData } from "../fixtures/testdata"


describe("this is the test",()=>{

    it("testlogin",()=>{
       cy.visit("{url}") 

       loginpage.inputemail(testData.email)
       loginpage.inputpassword(testData.password) 
       loginpage.clicksignin()
        
     }) 
})
    
    



