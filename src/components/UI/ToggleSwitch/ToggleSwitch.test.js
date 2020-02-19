import React from 'react';
import { mount } from 'enzyme';
import ToggleSwitch from './ToggleSwitch';
import { toggleSwitchProps } from "../../../data/fixtures";

const props = toggleSwitchProps;

describe('ToggleSwitch', () => {
    const toggleSwitch = mount(<ToggleSwitch {...props}/>);

    it ('renders switch', () => {
        expect(toggleSwitch.find('div').exists()).toBe(true);
    });
});