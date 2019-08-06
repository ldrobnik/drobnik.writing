import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  background-color: ${props => props.theme.background};
  font-size: ${props => props.theme.bodySize};
  text-align: center;
  padding: 0.5em 1em;
  margin: 3.5em 0 2.5em 0;
  a {
    font-weight: bold;
  }
`;

const DescriptionPanel = (props) => {

    return (
        <Description>
            {props.description}
        </Description>
    );
};

export default DescriptionPanel;