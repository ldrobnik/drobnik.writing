import React from 'react';
import {CreditWrapper} from '../../../styled';
import {TEXTS} from '../../../data/constants';

const Credits = props => {

    return (
        <CreditWrapper>
            <em>{TEXTS[props.lang][props.textName].credits}</em>
        </CreditWrapper>
    );
};

export default Credits;