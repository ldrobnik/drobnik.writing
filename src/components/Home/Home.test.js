import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import { homeProps } from "../../data/fixtures";

const props = homeProps;

describe('Home', () => {
    const home = shallow(<Home {...props} />);

    it('renders the correct number of routes', () => {
        console.log(home.debug());
        expect(home.find('Route').length).toEqual(5);
    });

    it('renders DataNotice', () => {
       expect(home.find('Connect(DataNotice)').exists()).toBe(true);
    });

    it('renders Spinner', () => {
       expect(home.find('Spinner').exists()).toBe(true);
    });

});