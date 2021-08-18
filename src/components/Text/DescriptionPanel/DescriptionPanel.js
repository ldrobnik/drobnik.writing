import React from 'react';
import {Description} from '../../../styled';

const DescriptionPanel = props => {

    return (
        <Description>
            {props.description}
        </Description>
    );
};

export default DescriptionPanel;