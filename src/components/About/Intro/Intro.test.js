import React from 'react';
import {shallow} from 'enzyme';
import { Intro } from './Intro';
import { introProps, introText } from "../../../data/fixtures";


const props = introProps;

describe('Intro', () => {
    const intro = shallow(<Intro {...props} />);

    it('renders the section heading', () => {
       expect(intro.find('SectionHeading').exists()).toBe(true);
    });

    it ('renders the photo', () => {
        expect(intro.find('CentredPhoto').exists()).toBe(true);
    });

    it ('displays section text', () => {
        expect(intro.find('div').first().text()).toContain(introText);
    });

    it('renders social media links', () => {
        expect(intro.find('SocialLinks').exists()).toBe(true);
    });

    it('renders the KoFi button', () => {
        expect(intro.find('Connect(CentredButton)').exists()).toBe(true);
    });

    it('renders links to other sections', () => {
        expect(intro.find('SectionLinks').exists()).toBe(true);
    });

    it('renders the section separator', () => {
        expect(intro.find('SectionSeparator').exists()).toBe(true);
    });
});