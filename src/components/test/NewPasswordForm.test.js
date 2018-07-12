import NewPasswordForm from '../NewPasswordForm'
import { shallow } from "enzyme"

describe('New password form',() => { 
    it ('New password form renders', () => { 
        expect(shallow(<NewPasswordForm/>)).toMatchSnapshot()
    });
} )