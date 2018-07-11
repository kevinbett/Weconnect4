import App from "../../App"
import { shallow } from "enzyme"

describe('App component',() => { 
    it ('renders app component', () => { 
        expect(shallow(<App/>)).toMatchSnapshot()
    });
} )