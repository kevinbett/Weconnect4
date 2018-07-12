import NewPasswordForm from "../NewPasswordForm"
import { shallow } from "enzyme"
import { Divider } from "../../../node_modules/semantic-ui-react";

describe('New password form',() => { 
    it ('renders new password form', () => { 
        expect(shallow(<NewPasswordForm/>)).toMatchSnapshot()
    });
} )
