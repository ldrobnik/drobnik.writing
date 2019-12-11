import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";

import * as actionTypes from "./../../../store/actions";
import {WEBSITE_TEXT, FADE_DURATION, AnimatedContent} from './../../../data/constants';

import SectionHeading from './../../UI/SectionHeading/SectionHeading'
import ToggleSwitch from './../../UI/ToggleSwitch/ToggleSwitch';
import PubList from './PubList/PubList';
import SectionLinks from "../SectionLinks/SectionLinks";
import SectionSeparator from "./../../UI/SectionSeparator/SectionSeparator";

/* STYLED COMPONENTS */
const Wrapper = styled.div`
  text-align: center;
`;

const Message = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;
  margin: 2em 0 0.5em 0;
`;

const SwitchPanel = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;
  margin-bottom: 2em;
`;

const SwitchWrapper = styled.div`
  display: flex;
  margin: 0.5em;
`;

const Label = styled.span`
  padding: 0.1em;
`;

const SubsectionHeading = styled.h1`
  font-size: ${props => props.theme.subtitleSize};
  //margin-top: 1em;
  text-transform: uppercase;
`;

const Separator = styled.div`
  margin: 2em auto 0 auto;
  height: 0.6em;
  width: 6em;
  background-color: ${props => props.theme.darkColor};
`;

/* POSE */
const AnimatedMessage = posed.div({
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        x: '-200%'
    }
});

const AnimatedPanel = posed.div({
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        x: '200%'
    }
});

const Pubs = (props) => {

    //specifies whether texts in English should be displayed
    const [en, setEn] = useState(true);

    //specifies whether texts in Polish should be displayed
    const [pl, setPl] = useState(true);

    //specifies whether the message should be visible
    const [messageVisible, setMessageVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.onReloadChange(false);
    };

    //toggles the display of English pubs and if both en and pl are false, sets pl to true
    const setEnHandler = () => {
        setEn(!en);
        if (en && !pl) setPl(true);
    };

    //toggles the display of Polish pubs and if both en and pl are false, sets en to true
    const setPlHandler = () => {
        setPl(!pl);
        if (!en && pl) setEn(true);
    };

    //shows the message
    const showMessage = () => {
        setMessageVisible(true);
    };

    //hides the message
    const hideMessage = () => {
        setMessageVisible(false);
    };

    useEffect(() => {

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    //hide message whenever the pathname changes
    useEffect(() => {

            setTimeout(hideMessage,100);

        },
        [props.location.pathname]
    );

    // //hide message and show them right away whenever the language changes
    // useEffect(() => {
    //         setTimeout(hideMessage,100);
    //         setTimeout(showMessage, 500);
    //     },
    //     [props.lang]
    // );

    return (
        <Wrapper>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.publications.title[props.lang]}
                    subtitle=""
                />
                <Waypoint
                    onEnter={showMessage}/>
            </AnimatedContent>
            <AnimatedMessage
                pose={messageVisible ? 'visible' : 'hidden'}>
                <Message>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].label}</Message>
            </AnimatedMessage>
            <AnimatedPanel
                pose={messageVisible ? 'visible' : 'hidden'}>
                <SwitchPanel>
                    <label>
                        <SwitchWrapper>
                            <ToggleSwitch
                                checked={en}
                                onChange={setEnHandler}
                            />
                            <Label>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].english}</Label>
                        </SwitchWrapper>
                    </label>
                    <label>
                        <SwitchWrapper>
                            <ToggleSwitch
                                checked={pl}
                                onChange={setPlHandler}
                            />
                            <Label>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].polish}</Label>
                        </SwitchWrapper>
                    </label>
                </SwitchPanel>
            </AnimatedPanel>
            <Waypoint
                onEnter={showMessage}/>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <Separator/>
                <Waypoint
                    onEnter={showMessage}/>
                <SubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].books}</SubsectionHeading>
                <PubList
                    en={en}
                    pl={pl}
                    type="books"/>
                <Waypoint
                    onEnter={showMessage}/>
                <Separator/>
                <SubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].press}</SubsectionHeading>
                <PubList
                    en={en}
                    pl={pl}
                    type="press"/>
                <Separator/>
                <SubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].collections}</SubsectionHeading>
                <PubList
                    en={en}
                    pl={pl}
                    type="collections"/>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    nocturine={true}
                    pubs={false}
                    read={true}
                />
                <SectionSeparator/>
            </AnimatedContent>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onReloadChange: (newState) => dispatch({
            type: actionTypes.SET_PAGE_RELOAD,
            pageReload: newState
        })
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pubs));