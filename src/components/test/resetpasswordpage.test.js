import ResetPasswordPage from '../ResetPasswordPage/index'
import { shallow } from "enzyme"

describe('Reset password page',() => { 
    it ('Reset password page renders', () => { 
        expect(shallow(<ResetPasswordPage/>)).toMatchSnapshot()
    });
} )