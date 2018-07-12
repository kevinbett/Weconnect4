import RegisterBusinessPage from '../RegisterBusinessPage/RegisterBusinessPage'
import { shallow } from "enzyme"

describe('Register business page',() => { 
    it ('Register business page renders', () => { 
        expect(shallow(<RegisterBusinessPage/>)).toMatchSnapshot()
    });
} )