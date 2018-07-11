import Logout from '../LogoutComponent/index'
import { shallow } from "enzyme"

describe('Logout component',() => { 
    it ('Logout componet renders', () => { 
        expect(shallow(<Logout/>)).toMatchSnapshot()
    });
} )