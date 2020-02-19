import React from 'react';
import { mount } from 'enzyme';
import CopyrightNote from './CopyrightNote';


describe('CopyrightNote', () => {
    const copyrightNote = mount(<CopyrightNote/>);

    it ('shows the copyright note', () => {
        expect(copyrightNote.find('div').text()).toContain("Drobnik");
    });
});