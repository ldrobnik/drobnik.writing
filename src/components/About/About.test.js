import React from 'react';
import { shallow } from 'enzyme';
import { About } from './About';
import { aboutProps } from "../../data/fixtures";

const props = aboutProps;

describe('About', () => {
    const about = shallow(<About {...props} />);
    it('renders Intro', () => {
        expect(about.find('withRouter(Connect(Intro))').exists()).toBe(true);
    });

    it('renders Nocturine', () => {
        expect(about.find('withRouter(Connect(Nocturine))').exists()).toBe(true);
    });

    it('renders Pubs', () => {
        expect(about.find('withRouter(Connect(Pubs))').exists()).toBe(true);
    });

    it('renders Read', () => {
        expect(about.find('withRouter(Connect(Read))').exists()).toBe(true);
    });

    it('renders CopyrightNote', () => {
        expect(about.find('CopyrightNote').exists()).toBe(true);
    });

    it('renders the copyright note', () => {
        expect(about.find('CopyrightNote').exists()).toBe(true);
    });
});