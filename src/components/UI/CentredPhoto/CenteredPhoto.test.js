import React from 'react';
import { mount } from 'enzyme';
import CenteredPhoto from './CentredPhoto';
import { imageProps } from "../../../data/fixtures";

const props = imageProps;

describe('CenteredPhoto', () => {
    let centeredPhoto = mount(<CenteredPhoto {...props} />);

    it ('renders the image', () => {
        expect(centeredPhoto.find('img').exists()).toBe(true);
    });

    it('uses the correct image source', () => {
        expect(centeredPhoto.find('img').props().src).toEqual(props.source);
    });

    it('uses the correct alt text', () => {
        expect(centeredPhoto.find('img').props().alt).toEqual(props.altText);
    });

});