import SearchResults from '../SearchResults'
import { shallow } from "enzyme"

describe('search results page ',() => { 
    it ('search results page renders', () => { 
        const results = [
            {
                "category": "tech",
                "id": 3,
                "location": "trm",
                "name": "android",
                "type": "tech"
            }
        ];
        expect(shallow(<SearchResults results={ results }/>)).toMatchSnapshot()
    });
} )