import Search from '../SearchBusiness/index'
import { shallow } from "enzyme"

describe('search business page',() => { 
    it ('search business page renders', () => { 
        expect(shallow(<Search/>)).toMatchSnapshot()
    });
} )