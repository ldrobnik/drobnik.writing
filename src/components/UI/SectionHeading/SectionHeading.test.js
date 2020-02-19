import React from 'react';
import { mount } from 'enzyme';
import SectionHeading from './SectionHeading';
import { sectionHeadingProps } from "../../../data/fixtures";

const props = sectionHeadingProps;

describe('SectionHeading', () => {
    const sectionHeading = mount(<SectionHeading {...props}/>);

    it ('displays the correct title', () => {
        console.log(sectionHeading.debug());
        expect(sectionHeading.find('div').at(1).text()).toEqual(sectionHeadingProps.title);
    });

    it ('displays the correct subtitle', () => {
        console.log(sectionHeading.debug());
        expect(sectionHeading.find('div').at(2).text()).toEqual(sectionHeadingProps.subtitle);
    });
});