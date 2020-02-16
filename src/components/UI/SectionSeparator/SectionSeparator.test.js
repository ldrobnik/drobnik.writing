import React from 'react';
import { mount } from 'enzyme';
import SectionSeparator from './SectionSeparator';

describe('SectionSeparator', () => {
    let sectionSeparator = mount(<SectionSeparator />);

    it ('renders separator', () => {
        expect(sectionSeparator.find('div').exists()).toBe(true);
    });
});