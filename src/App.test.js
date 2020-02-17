import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { appProps } from './data/fixtures';

const props = appProps;

describe('App', () => {
    const app = shallow(<App {...props} />);
    it('renders Home component', () => {
        expect(app.find('withRouter(Connect(Home))').exists()).toBe(true);
    });
});