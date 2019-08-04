import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {WEBSITE_TEXT} from "../../../data/constants";

const Wrapper = styled.div`
  background-color: ${props => props.theme.darkColor};
  opacity: ${props => props.theme.translucent};
  margin: 0 auto;
  height: 6em;
  position: fixed;
  bottom: 10px;
  left: 5%;
  width: 90%;
  

    @media all and (min-width: ${props => props.theme.mediumScr}) {
       left: 10%;
       width: 80%;
    }
    
    @media all and (min-width: ${props => props.theme.largeScr}) {
       left: 15%;
       width: 70%;
    }
    
    @media all and (min-width: ${props => props.theme.extraLargeScr}) {
       left: 20%;
       width: 60%;
    }
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