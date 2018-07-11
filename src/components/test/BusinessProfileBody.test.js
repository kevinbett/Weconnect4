import BusinessProfile from '../BusinessProfileBody'
import { shallow } from "enzyme"

describe('Business profile body',() => { 
    it ('Business profile body renders', () => { 
        expect(shallow(<BusinessProfile/>)).toMatchSnapshot()
    });
} )