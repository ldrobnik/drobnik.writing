import React from 'react';
import styled from 'styled-components';

/*STYLED COMPONENTS*/
const Separator = styled.div`
  margin: 6em auto 3em auto;
  height: 0.8em;
  width: 15em;
  background-color: ${props => props.theme.darkColor};
`;

const SectionSeparator = () => {

    return (
        <Separator />
    );
};

export default SectionSeparator;