import React from 'react';
import {shallow} from 'enzyme';
import PubList from './PubList';
import { pubListProps } from "../../../../data/fixtures";
import { PUBLICATIONS } from "../../../../data/constants";


const props = pubListProps;

describe('PubList', () => {
    const pubList = shallow(<PubList {...props} />);
    it('renders the correct number of pub tiles', () => {
        expect(pubList.find('Connect(PubTile)').length).toEqual(PUBLICATIONS[props.type].length);
    });

});