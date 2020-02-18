import React from 'react';
import {shallow} from 'enzyme/build';
import { Read } from './Read';
import { readProps, readText } from "../../../data/fixtures";
import { TEXT_NAMES } from "../../../data/constants";


const props = readProps;

describe('Read', () => {
    const read = shallow(<Read {...props} />);

    it('renders the section heading', () => {
        expect(read.find('SectionHeading').exists()).toBe(true);
    });

    it ('displays section text', () => {
        expect(read.find('div').first().text()).toContain(readText);
    });

    it('renders the correct number of links to texts', () => {
        expect(read.find('Connect(ReadListElement)').length).toEqual(TEXT_NAMES.length);
    });

    it('renders links to other sections', () => {
        expect(read.find('SectionLinks').exists()).toBe(true);
    });

    it('renders the section separator', () => {
        expect(read.find('SectionSeparator').exists()).toBe(true);
    });
});