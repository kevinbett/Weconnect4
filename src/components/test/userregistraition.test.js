import RegisterForm from '../RegisterBusinessForm'
import { shallow } from "enzyme"

describe('registration page renders',() => { 
    it ('populates the signup form', () => { 
        expect(shallow(<RegisterForm/>)).toMatchSnapshot()
    });
} )
