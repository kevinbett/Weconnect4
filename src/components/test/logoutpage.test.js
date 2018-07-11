import LogoutPage from '../LandingPage/index'
import { shallow } from "enzyme"

describe('Logout page',() => { 
    it ('Logout page renders', () => { 
        expect(shallow(<LogoutPage/>)).toMatchSnapshot()
    });
} )