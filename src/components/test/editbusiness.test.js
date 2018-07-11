import EditBusinessForm from "../EditBusinessBody/index"
import { shallow } from "enzyme"

describe('login page renders',() => {
    it ('populates the the login form', () => { 
        const location = {
            query: {
                business: {
                    category: "fast food",
                    id: 122,
                    location: "roysambu",
                    name: "minenetoo",
                    type:"cuisine",
                    user_id:1
                }
            }
        }
        expect(shallow(<EditBusinessForm location={location}/>)).toMatchSnapshot()
    });

} )