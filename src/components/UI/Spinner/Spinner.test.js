import React from 'react';
import { mount } from 'enzyme';
import Spinner from './Spinner';

describe('Spinner', () => {
    let spinner = mount(<Spinner />);

    it ('renders the image', () => {
        expect(spinner.find('img').exists()).toBe(true);
    });

    it('uses the correct image source', () => {
        expect(spinner.find('img').props().src).toEqual('logo.svg');
    });

});