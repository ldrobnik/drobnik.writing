import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
  background-color: ${props => props.theme.background};
  font-size: ${props => props.theme.bodySize};
  text-align: center;
  padding: 0.5em 1em;
  margin: 1em 0;
  position: relative;
  overflow: hidden;
  a {
    font-weight: bold;
  }
`;

const Inscription = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 24em;
  text-transform: uppercase;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur( ${props => props.theme.heavyBlur});
  user-select: none;
`;


const DescriptionPanel = (props) => {

    return (
        <Description>
            {props.description}
            <Inscription>
                {props.title}
            </Inscription>
        </Description>
    );
};

export default DescriptionPanel;