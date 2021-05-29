import React from 'react';
import {shallow} from 'enzyme';
import { Book } from './Book';
import { nocturineProps, nocturineText } from "../../../data/fixtures";


const props = nocturineProps;

describe('Nocturine', () => {
    const nocturine = shallow(<Book {...props} />);

    it('renders the section heading', () => {
        expect(nocturine.find('SectionHeading').exists()).toBe(true);
    });

    it ('displays section text', () => {
        expect(nocturine.find('div').first().text()).toContain(nocturineText);
    });

    it('renders the book excerpt button', () => {
        expect(nocturine.find('Connect(CentredButton)').exists()).toBe(true);
    });

    it('renders the list of quotes', () => {
        expect(nocturine.find('QuoteList').exists()).toBe(true);
    });

    it('renders links to other sections', () => {
        expect(nocturine.find('SectionLinks').exists()).toBe(true);
    });

    it('renders the section separator', () => {
        expect(nocturine.find('SectionSeparator').exists()).toBe(true);
    });
});