import React from 'react';
import {SectionHeader, PageTitle, SectionSubtitle} from '../../../styles/shared';

const SectionHeading = props => {

    return (
        <SectionHeader>
            <PageTitle>{props.title}</PageTitle>
            <SectionSubtitle>{props.subtitle}</SectionSubtitle>
        </SectionHeader>
    );
};

export default SectionHeading;