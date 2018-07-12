import RegistrationPage from '../RegistrationPage/index'
import { shallow } from "enzyme"

describe('Registration page',() => { 
    it ('Registration page renders', () => { 
        expect(shallow(<RegistrationPage/>)).toMatchSnapshot()
    });
} )