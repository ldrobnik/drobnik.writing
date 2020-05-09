import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { setDataNoticeVisible, setDataNoticeAccepted } from "../../../actions";

import {WEBSITE_TEXT, AnimatedContent} from "../../../data/constants";

/* STYLED COMPONENTS */
const Notice = styled.div`
  background-color: ${props => props.theme.darkColor};
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

const Message = styled.div`
    color: ${props => props.theme.lightColor};
    font-size: ${props => props.theme.captionSize};
    font-family: ${props => props.theme.serif};
    padding: 0.5em 1em;
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
      opacity: ${props => props.theme.slightlyTranslucent};
    }
`;


export const DataNotice = (props) => {

    //notice content to be displayed
    const [noticeVisible, setNoticeVisible] = useState(false);

    //specifies whether the fade in animation should be played
    const [noticeFadeIn, setNoticeFadeIn] = useState(false);
    //updates Redux states, setting data notice acceptance to true and data notice visibility to false, and stores the data in localStorage
    const acceptDataNotice = () => {

        //update Redux states
        props.setDataNoticeVisible(false); //sets data storage notice display to false
        props.setDataNoticeAccepted(true); //sets data storage acceptance to true

        //store information about accepting the notice in localStorage
        localStorage.setItem('dataNoticeAccepted', true);
    };

    //sets the notice as visible and schedules fade-in animation
    const setContent = () => {
        setNoticeVisible(true);
        if (props.noticeVisible) {
            setNoticeFadeIn(true);
        }
    };


    //the content of notice to be displayed depending on the setNoticeVisible value
    const notice = (props.noticeVisible && noticeVisible) ?
        (<Notice>
            <AnimatedContent
                pose={noticeFadeIn ? 'visible' : 'hidden'}>
                <Message>
                    {WEBSITE_TEXT.dataNotice[props.lang].message}
                </Message>
                <DismissButton
                    onClick={acceptDataNotice}c
                >
                    {WEBSITE_TEXT.dataNotice[props.lang].button}
                </DismissButton>
            </AnimatedContent>
        </Notice>) :
        <div></div>;

    useEffect(() => {
        setTimeout(setContent, 2500);
    });

    return (
        <React.Fragment>
            {notice}
        </React.Fragment>
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
    return bindActionCreators({
        setDataNoticeVisible,
        setDataNoticeAccepted
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DataNotice);