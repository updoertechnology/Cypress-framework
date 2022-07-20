import { utils } from "../utils/utils"

const Email = "#email"
const password ="#pwd"
const signbtn ="#button"
const otp ="#verification-code"
const vbutton ="#vbutton"

export class login{
    inputemail(emailtest)
    {
        utils.enterText(Email, emailtest)
    }
    inputpassword(pass)
    {
        utils.enterText(password, pass)
     
    }
    clicksignin()
    {
        utils.click(signbtn)
       
    }
    inputotp()
    {
        utils.enterText(otp, '123456')
   
    } 
    validateotp()
    {
        utils.click(vbutton)
    }

}
export const loginpage = new login()
