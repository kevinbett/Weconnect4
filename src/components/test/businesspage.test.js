import BusinessPage from "../BusinessPage"
import { shallow } from "enzyme"

describe('Business page',() => { 
    it ('renders business page', () => { 
        expect(shallow(<BusinessPage/>)).toMatchSnapshot()
    });
} )