import NewPasswordPage from '../NewPasswordPage/index'
import { shallow } from "enzyme"

describe('New password page',() => { 
    it ('New password page renders', () => { 
        expect(shallow(<NewPasswordPage/>)).toMatchSnapshot()
    });
} )