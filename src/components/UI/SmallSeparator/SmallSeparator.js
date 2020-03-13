import React from 'react';
import styled from 'styled-components';

/*STYLED COMPONENTS*/
const Separator = styled.div`
  margin: 2.8em auto 1.4em auto;
  height: 0.6em;
  width: 8em;
  background-color: ${props => props.theme.darkColor};
`;

const SmallSeparator = () => {

    return (
        <Separator />
    );
};

export default SmallSeparator;