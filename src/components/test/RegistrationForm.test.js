import RegisterForm from "../RegistrationForm/RegisterForm"
import { shallow } from "enzyme"

describe('Register page renders',() => { 
    it ('populates register form', () => { 
        expect(shallow(<RegisterForm />)).toMatchSnapshot()
    });
} )