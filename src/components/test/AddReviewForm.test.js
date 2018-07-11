import AddReviewForm from "../AddReviewForm/index"
import { shallow } from "enzyme"

describe('Add Review Page Renders',() => {
    it ('populates add review form', () => { 
        const location = {
            query: {
                review: {
                    category: "fast food",
                    id: 122,
                    location: "roysambu",
                    name: "minenetoo",
                    type:"cuisine",
                    user_id:1
                }
            }
        }
        expect(shallow(<AddReviewForm location={location}/>)).toMatchSnapshot()
    });

} )