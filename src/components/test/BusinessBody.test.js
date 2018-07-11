import RenderBusiness from '../BusinessBody'
import { shallow } from "enzyme"

describe('Business Body',() => { 
    it ('Business body renders', () => { 
        expect(shallow(<RenderBusiness/>)).toMatchSnapshot()
    });
} )