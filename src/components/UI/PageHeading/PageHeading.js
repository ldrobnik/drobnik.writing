import React from 'react';
import {SectionHeader, PageTitle, SectionSubtitle} from '../../../styled';

const SectionHeading = props => {

    return (
        <SectionHeader>
            <PageTitle>{props.title}</PageTitle>
            <SectionSubtitle>{props.subtitle}</SectionSubtitle>
        </SectionHeader>
    );
};

export default SectionHeading;