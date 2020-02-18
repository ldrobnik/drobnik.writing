import React from 'react';
import {shallow} from 'enzyme';
import {Pubs} from './Pubs';
import {pubsProps} from "../../../data/fixtures";


const props = pubsProps;

describe('Pubs', () => {
    const pubs = shallow(<Pubs {...props} />);
    it('renders SectionHeading', () => {
        expect(pubs.find('SectionHeading').exists()).toBe(true);
    });

    it('renders both ToggleSwitches', () => {
        expect(pubs.find('ToggleSwitch').length).toEqual(2);
    });

    it('renders the correct number of PubList components', () => {
        expect(pubs.find('PubList').length).toEqual(3);
    });

    it('renders SectionSeparator', () => {
        expect(pubs.find('SectionSeparator').exists()).toBe(true);
    });

    describe('when clicking the English ToggleSwitch', () => {
        beforeEach(() => {
           pubs.find('ToggleSwitch').first().simulate('change');
        });

        it ('changes the English ToggleSwitch `checked` prop to `false`', () => {
           expect(pubs.find('ToggleSwitch').first().props().checked).toBe(false);
        });
    });

    describe('when clicking the Polish ToggleSwitch', () => {
        beforeEach(() => {
            pubs.find('ToggleSwitch').at(1).simulate('change');
        });

        it ('changes the English ToggleSwitch `checked` prop to `false`', () => {
            expect(pubs.find('ToggleSwitch').at(1).props().checked).toBe(false);
        });
    });

});