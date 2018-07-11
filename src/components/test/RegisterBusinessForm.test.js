import RegisterBusinessForm from '../RegisterBusinessForm'
import { shallow } from "enzyme"

describe('Business Registration Form',() => { 
    it ('Business Registration Form Renders', () => { 
        expect(shallow(<RegisterBusinessForm/>)).toMatchSnapshot()
    });
} )
