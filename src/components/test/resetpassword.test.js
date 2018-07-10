import ResetPassword from '../ResetPasswordForm'
import { shallow } from "enzyme"

describe('registration page renders',() => { 
    it ('populates the signup form', () => { 
        expect(shallow(<ResetPassword/>).find("form").exists()).toBe(true);
    })
} )
