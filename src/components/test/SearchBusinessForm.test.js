import Search from '../SearchBusiness/index'
import { shallow } from "enzyme"

describe('Business Search Form',() => { 
    it ('Business Search Form Renders', () => { 
        expect(shallow(<Search/>)).toMatchSnapshot()
    });
} )