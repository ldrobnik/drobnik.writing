import React from 'react';
import { mount } from 'enzyme/build';
import ToggleSwitch from './ToggleSwitch';
import { toggleSwitchProps } from "../../../data/fixtures";

const props = toggleSwitchProps;

describe('ToggleSwitch', () => {
    let toggleSwitch = mount(<ToggleSwitch {...props}/>);

    it ('renders switch', () => {
        expect(toggleSwitch.find('div').exists()).toBe(true);
    });
});