import React from 'react';
import {SectionHeader, SectionTitle, SectionSubtitle} from '../../../styles/shared';

const SectionHeading = props => {

    return (
        <SectionHeader>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionSubtitle>{props.subtitle}</SectionSubtitle>
        </SectionHeader>
    );
};

export default SectionHeading;