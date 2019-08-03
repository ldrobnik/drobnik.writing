import React from 'react';
import styled from 'styled-components';

const Separator = styled.div`
  margin: 6em auto 3em auto;
  height: 0.8em;
  width: 15em;
  background-color: ${props => props.theme.darkColor};
`;


const SectionSeparator = (props) => {

    return (
        <Separator />
    );
};

export default SectionSeparator;