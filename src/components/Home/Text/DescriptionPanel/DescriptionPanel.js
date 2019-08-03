import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

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

const Capital = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 24em;
  text-transform: uppercase;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur( ${props => props.theme.heavyBlur});
`;


const DescriptionPanel = (props) => {

    return (
        <Wrapper>
            <Description>
                {props.description}
                <Capital>
                    {props.title}
                </Capital>
            </Description>

        </Wrapper>
    );
};

export default DescriptionPanel;