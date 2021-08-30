import React from 'react';
import {Description} from '../../../styles/text';

const DescriptionPanel = props => {

    return (
        <Description>
            {props.description}
        </Description>
    );
};

export default DescriptionPanel;