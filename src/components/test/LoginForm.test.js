import LoginForm from "../LoginForm/LoginForm"
import { shallow } from "enzyme"

describe('login page renders',() => { 
    it ('populates the the login form', () => { 
        expect(shallow(<LoginForm/>)).toMatchSnapshot()
    });
} )
