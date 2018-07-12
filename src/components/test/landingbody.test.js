import Home from "../LandingBody/index"
import { shallow } from "enzyme"
import { Divider } from "../../../node_modules/semantic-ui-react";

describe('landig body',() => { 
    it ('renders the lading body', () => { 
        expect(shallow(<Home/>)).toMatchSnapshot()
    });
} )
