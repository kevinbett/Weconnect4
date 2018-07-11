import SearchBiz from '../SearchBusinessPage'
import { shallow } from "enzyme"

describe('Search business page',() => { 
    it ('Renders search business page', () => { 
        expect(shallow(<SearchBiz/>)).toMatchSnapshot()
    });
} )