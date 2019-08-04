import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {WEBSITE_TEXT} from "../../../data/constants";
import * as actionTypes from "../../../store/actions";

const Wrapper = styled.div`
  background-color: ${props => props.theme.darkColor};
  opacity: ${props => props.theme.translucent};
  padding: 1em 0;
  margin: 0 auto;
  position: fixed;
  bottom: 10px;
  left: 5%;
  width: 90%;
  text-align: center;
  

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

const Message = styled.p`
    color: ${props => props.theme.lightColor};
    font-size: ${props => props.theme.captionSize};
    font-family: ${props => props.theme.serif};
    padding: 0 1em;
`;

const DismissButton = styled.div`
    background-color: ${props => props.theme.lightColor};
    text-transform: uppercase;
    font-weight: bold;
    max-width: 8em;
    margin: 0 auto;
    padding: 0.3em;
    cursor: pointer;
    
    &:hover {
      opacity: ${props => props.theme.translucent};
    }
`;

const DataNotice = (props) => {

    return (
        <Wrapper>
            <Message>
                {WEBSITE_TEXT.dataNotice[props.lang].message}
            </Message>
            <DismissButton>
                {WEBSITE_TEXT.dataNotice[props.lang].button}
            </DismissButton>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        noticeVisible: state.dataNoticeVisible,
        noticeAccepted: state.dataNoticeAccepted
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onVisibilityChange: (newState) => dispatch({type: actionTypes.SET_DATA_NOTICE_VISIBLE, dataNoticeVisible: newState}),
        onAcceptanceChange: (newState) => dispatch({type: actionTypes.SET_DATA_NOTICE_ACCEPTED, dataNoticeAccepted: newState})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataNotice);