import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from 'react-waypoint';

import * as actionTypes from "./../../../store/actions";
import {WEBSITE_TEXT, FADE_DURATION, AnimatedContent} from './../../../data/constants';

import SectionHeading from './../../UI/SectionHeading/SectionHeading'
import CentredButton from "./../../UI/CentredButton/CentredButton";
import SectionLinks from "../SectionLinks/SectionLinks";
import QuoteList from '../QuoteList/QuoteList';
import SectionSeparator from "./../../UI/SectionSeparator/SectionSeparator";

/* STYLED COMPONENTS */
const Body = styled.div`
  text-align: justify;
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  margin-top: 1.3em;
    
    a {
      font-family: ${props => props.theme.sansSerif};
    }
    
    .bookTitle {
    text-transform: uppercase;
    font-weight: bold;
    font-style: italic;
    font-family: ${props => props.theme.sansSerif};
    }
`;

/* POSE */
const AnimatedButton = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

const Nocturine = (props) => {
    //specifies whether the quotes should be displayed - triggered by scrolling to the Waypoint element
    const [quotesVisible, setQuotesVisible] = useState(false);

    //specifies whether the excerpt button should be visible
    const [buttonVisible, setButtonVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.onReloadChange(false);
    };

    //sets quote visibility to true
    const showQuotes = () => {
        setQuotesVisible(true);
    };

    //sets button visibility to true
    const showButton = () => {
        setButtonVisible(true);
    };

    //sets quotes and button visibility to false
    const hideElements = () => {
        setQuotesVisible(false);
        setButtonVisible(false);
    };

    useEffect(() => {
        //show content after a while
        setTimeout(
            () => {
                showContent();
            }, FADE_DURATION
        );
    });

    //hide social links whenever the pathname changes
    useEffect(() => {
            setTimeout(() => {

                hideElements();
            }, 100);
        },
        [props.location.pathname]
    );


    return (
        <React.Fragment>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.nocturine.title[props.lang]}
                    subtitle=""
                />
                <Body>
                    {WEBSITE_TEXT.nocturine.body[props.lang]}
                </Body>
                <Waypoint
                    onEnter={showQuotes}
                />
            </AnimatedContent>
            <QuoteList
                lang={props.lang}
                visible={quotesVisible}
            />
            <Waypoint
                onEnter={showQuotes}
            />
            <Waypoint
                onEnter={showButton}
            />
            <AnimatedButton
                pose={buttonVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={WEBSITE_TEXT.nocturine.button[props.lang].message}
                    path={WEBSITE_TEXT.nocturine.button[props.lang].path}
                    capital='m'/>
            </AnimatedButton>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    nocturine={false}
                    pubs={true}
                    read={true}
                />
                <SectionSeparator/>
            </AnimatedContent>
            <Waypoint
                onEnter={showButton}
            />
            <Waypoint
                onEnter={showQuotes}
            />
        </React.Fragment>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nocturine));