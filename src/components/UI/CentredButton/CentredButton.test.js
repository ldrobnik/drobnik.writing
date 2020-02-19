import React from 'react';
import { shallow } from 'enzyme';
import { CentredButton } from './CentredButton';
import {centredButtonProps} from "../../../data/fixtures";

const props = centredButtonProps;

describe('CentredButton', () => {
    const centredButton = shallow(<CentredButton {...props}/>);

    it ('links to the correct path', () => {
        expect(centredButton.find('a').props().href).toEqual(centredButtonProps.path);
    });

    it ('shows the correct message', () => {
        expect(centredButton.find('a').text()).toEqual(centredButtonProps.message);
    });
});