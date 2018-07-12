import Logout from '../LogoutComponent'
import { shallow } from "enzyme"

jest.mock('../../apiServices/api');

describe('Logout component',() => { 
    it ('Logout componet renders', (done) => {
        const wrapper =  shallow(<Logout/>);
        
        setTimeout(() => {
            wrapper.update();
            expect(wrapper).toMatchSnapshot();
            done();
        });
    });
});