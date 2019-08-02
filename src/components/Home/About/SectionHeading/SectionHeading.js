import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Header = styled.div`
  text-align: center;
`;

const Title = styled.div`
    font-size: ${props => props.theme.titleSize};
    font-weight: bold;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 12vw;
    }
`;

const Subtitle = styled.div`
    font-size: ${props => props.theme.subtitleSize};
    font-weight: bold;
    font-style: italic;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 6vw;
    }
    
`;
const SectionHeading = (props) => {

    return (
        <Header>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </Header>
    );
};

export default SectionHeading;