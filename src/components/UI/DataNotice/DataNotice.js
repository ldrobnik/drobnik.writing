import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {WEBSITE_TEXT} from "../../../data/constants";

const Wrapper = styled.div`
  background-color: ${props => props.theme.darkColor};
  opacity: ${props => props.theme.translucent};
  margin: 0 auto;
  height: 6em;
  width: 90%;
  position: fixed;
  bottom: 10px;
  left: 0;
  transform: translateX(5%);
`;

const Message = styled.div`

`;

const DismissButton = styled.div`

`;

const DataNotice = (props) => {

    return (
        <Wrapper>

        </Wrapper>
    );
};

export default DataNotice;