import AddReviewPage from "../AddReviewsPage"
import { shallow } from "enzyme"

describe('Add Review Page',() => { 
    it ('renders add review body', () => { 
        expect(shallow(<AddReviewPage/>)).toMatchSnapshot()
    });
} )
