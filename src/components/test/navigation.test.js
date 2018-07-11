import Navigation from "../Navigation"
import { shallow } from "enzyme"
import { Divider } from "../../../node_modules/semantic-ui-react";

describe('Navigation bar',() => { 
    it ('renders navigation bar components', () => { 
        expect(shallow(<Navigation/>).find("Link.navbar-brand").exists()).toBe(true);
    })
} )
