import BusinessProfilePage from "../BusinessProfilePage"
import { shallow } from "enzyme"

describe('Business Profile page',() => { 
    it ('renders Business Profile page', () => { 
        expect(shallow(<BusinessProfilePage/>)).toMatchSnapshot()
    });
} )