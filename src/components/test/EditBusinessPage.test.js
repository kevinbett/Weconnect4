import EditBusinessPage from "../EditBusinessPage"
import { shallow } from "enzyme"

describe('Edit Business page',() => { 
    it ('renders Edit Business page', () => { 
        expect(shallow(<EditBusinessPage/>)).toMatchSnapshot()
    });
} )