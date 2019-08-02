import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Title = styled.div`
    font-size: ${props => props.theme.titleSize};
    font-weight: bold;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 15vw;
    }
`;

const Subtitle = styled.div`
    font-size: ${props => props.theme.subtitleSize};
    font-weight: bold;
    font-style: italic;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 8vw;
    }
    
`;
const SectionHeading = (props) => {

    return (
        <React.Fragment>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </React.Fragment>
    );
};

export default SectionHeading;