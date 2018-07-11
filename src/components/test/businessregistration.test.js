import RegisterBusinessForm from "../RegisterBusinessForm"
import { shallow } from "enzyme"
import { Divider } from "../../../node_modules/semantic-ui-react";

describe('register business form',() => { 
    it ('renders business registration form', () => { 
        expect(shallow(<RegisterBusinessForm/>)).toMatchSnapshot()
    });
} )
