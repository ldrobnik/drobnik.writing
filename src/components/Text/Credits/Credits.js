import React from 'react';
import styled from 'styled-components';

import {TEXTS} from "../../../data/constants";

/*STYLED COMPONENTS*/
const CreditWrapper = styled.div`
  font-size: ${props => props.theme.captionSize};
  font-family: ${props => props.theme.serif};
  margin-top: 2em;
`;

const Credits = (props) => {

    return (
        <CreditWrapper>
            <i>{TEXTS[props.lang][props.textName].credits}</i>
        </CreditWrapper>
    );
};

export default Credits;