import ResetPassword from '../ResetPasswordForm'
import { shallow } from "enzyme"

describe('Reset password form',() => { 
    it ('Reset password form renders', () => { 
        expect(shallow(<ResetPassword/>)).toMatchSnapshot()
    });
} )