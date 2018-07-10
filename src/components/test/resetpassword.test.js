import ResetPassword from '../ResetPasswordForm'
import { shallow } from "enzyme"

describe('registration page renders',() => { 
    it ('populates the signup form', () => { 
        expect(shallow(<ResetPassword/>).find("input.button").exists()).toBe(true),
        expect(shallow(<ResetPassword/>).find("div#main-registration-container").exists()).toBe(true),
        expect(shallow(<ResetPassword/>).find("form").exists()).toBe(true),
        expect(shallow(<ResetPassword/>).find("input").exists()).toBe(true),
        expect(shallow(<ResetPassword/>).find("label").exists()).toBe(true),
        expect(shallow(<ResetPassword/>).find("p").exists()).toBe(true)
        
        ;
    })
} )
