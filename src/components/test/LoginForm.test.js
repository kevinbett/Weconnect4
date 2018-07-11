import LoginForm from "../LoginForm/LoginForm"
import { shallow } from "enzyme"

describe('login page renders',() => { 
    it ('populates the the login form', () => { 
        expect(shallow(<LoginForm/>).find("Link.pass-reset").exists()).toBe(true),
        expect(shallow(<LoginForm/>).find("div").exists()).toBe(true),
        expect(shallow(<LoginForm/>).find("form").exists()).toBe(true),
        expect(shallow(<LoginForm/>).find("label").exists()).toBe(true);
    })
} )
