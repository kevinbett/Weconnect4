import BusinessProfile from '../BusinessProfileBody/index';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from "enzyme"

describe('Business profile body',() => { 
    it ('Business profile body renders', () => { 
        const wrapper = shallow(<BusinessProfile/>);
        expect(wrapper).toMatchSnapshot();
    });
} )