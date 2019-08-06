import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import posed from 'react-pose';
import {LINKS, TEXT_NAMES, FADE_DURATION} from "../../data/constants";
import QuickLink from "./QuickLink/QuickLink";
import * as actionTypes from "../../store/actions";

const Wrapper = styled.div`
   @media all and (min-width: ${props => props.theme.extraSmallScr}) {
      padding: 1em 3em;
    }
    
    @media all and (min-width: ${props => props.theme.smallScr}) {
      padding: 1em 5%;
    }
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding: 1em 10%;
    }
    
    @media all and (min-width: ${props => props.theme.largeScr}) {
      padding: 1em 12%;
    }
    
    @media all and (min-width: ${props => props.theme.extraLargeScr}) {
      padding: 1em 15%;
    }
    
    padding: 1em 1em;
`;

/* POSE */
const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0px)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

const QuickLinks = (props) => {

    //shows the content
    const showContent = () => {
        props.onReloadChange(false);
    };

    //updates current theme with a random theme
    const updateTheme = () => {
        //randomly selected theme
        const randomTheme = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

        //update Redux store with a new theme
        props.onThemeChange(randomTheme);
    };

    //hides the NavBar
    const hideNavbar = () => {
        props.onSetNavbar(false);
    };

    //turns of data storage notice
    const hideDataNotice = () => {
        props.onSetNotice(false)
    };

    useEffect(() => {

        //hide navbar
        hideNavbar();

        //Update page title
        document.title = `Łukasz Drobnik - quick links`;

        //change theme to a random one
        updateTheme();

        //Hide data storage notice
        hideDataNotice();

        //show content after a while
        setTimeout(
            () => {
                showContent();
            }, FADE_DURATION
        );
    });

    return (
        <AnimatedContent
            pose={!props.reload ? 'visible' : 'hidden'}>
            <Wrapper>
                {LINKS.map((link, k) => {
                    return (
                        <QuickLink
                            title={link.title}
                            subtitle={link.subtitle}
                            url={link.url}
                            key={k}/>
                    )
                })}
            </Wrapper>
        </AnimatedContent>
    );
};

const mapStateToProps = state => {
    return {
        reload: state.pageReload
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onThemeChange: (newTheme) => dispatch({
            type: actionTypes.SET_THEME,
            theme: newTheme
        }),
        onSetNavbar: (newState) => dispatch({
            type: actionTypes.SET_NAVBAR_VISIBILITY,
            navbarVisible: newState
        }),
        onSetNotice: (newState) => dispatch({
            type: actionTypes.SET_DATA_NOTICE_VISIBLE,
            dataNoticeVisible: newState
        }),
        onReloadChange: (newState) => dispatch({
            type: actionTypes.SET_PAGE_RELOAD,
            pageReload: newState
        })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(QuickLinks);
