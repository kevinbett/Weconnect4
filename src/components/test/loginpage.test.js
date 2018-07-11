import LoginPage from "../LoginPage"
import { shallow } from "enzyme"

describe('Login page',() => { 
    it ('renders Login page', () => { 
        expect(shallow(<LoginPage/>)).toMatchSnapshot()
    });
} )