import React from 'react';
import {shallow} from 'enzyme';
import { Text } from './Text';
import { textProps, textText } from '../../data/fixtures';
import { TEXTS } from '../../data/constants';


const props = textProps;

describe('Text', () => {
    const text = shallow(<Text {...props} />);

    it('displays the right story title', () => {
        expect(text.text()).toContain(TEXTS[props.lang][props.textName].title);
    });

    it('displays the right story', () => {
        expect(text.find('p').first().text()).toContain(textText);
    });

    it('renders the `next text` link', () => {
        expect(text.find('Connect(NextTextLink)').exists()).toBe(true);
    });

    it('renders the credits', () => {
        expect(text.find('Credits').exists()).toBe(true);
    });

    it('renders the panel with description', () => {
        expect(text.find('DescriptionPanel').exists()).toBe(true);
    });

    it('renders the `next text` link', () => {
        expect(text.find('Connect(NextTextLink)').exists()).toBe(true);
    });

    it('renders the section separator', () => {
        expect(text.find('SectionSeparator').exists()).toBe(true);
    });

    it('renders the copyright note', () => {
        expect(text.find('CopyrightNote').exists()).toBe(true);
    });
});