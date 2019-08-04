import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {LINKS, TEXT_NAMES} from "../../data/constants";
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

const QuickLinks = (props) => {

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
    });

    return (
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
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onThemeChange: (newTheme) => dispatch({
            type: actionTypes.SET_THEME,
            theme: newTheme}),
        onSetNavbar: (newState) => dispatch({
            type: actionTypes.SET_NAVBAR_VISIBILITY,
            navbarVisible: newState}),
        onSetNotice: (newState) => dispatch({
            type: actionTypes.SET_DATA_NOTICE_VISIBLE,
            dataNoticeVisible: newState
        })
    };
};


export default connect(null, mapDispatchToProps)(QuickLinks);
