import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Logo from './Logo/Logo';
import * as actionTypes from '../../store/actions';
import {WEBSITE_TEXT, TEXTS, TEXT_NAMES} from '../../data/constants';

const Toolbar = styled.header`
    height: 3em;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 2em;
    box-sizing: border-box;
    background-color: ${props => props.theme.background};
    opacity: ${props => props.theme.background};
    z-index: 90;
    font-weight: bold;
     user-select: none;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: -4px;
  left: -2px;
`;

const Options = styled.div`
  cursor: pointer;
  font-size: 1em;
  margin-left: 2em;
`;

const NavLink = styled.div`
  font-size: 1.3em;
   margin-left: 2em;
`;


const Translucent = styled.span`
  opacity: ${props => props.theme.translucent};
`;


const NavBar = (props) => {

    //The currently displayed text
    const currentText = props.curText;

    //The prev button link - by default it is the last available text
    let prevLink;

    //The next button link -  by default it is the first available text
    let nextLink;

    //If any text is displayed, change the previous and next button links accordingly
    if (currentText !== '') {
        //The index of the currently displayed text
        const textIndex = TEXT_NAMES.indexOf(props.curText);

        //Index of the previous text to be displayed
        const prevIndex = (textIndex > 0) ? textIndex - 1 : TEXT_NAMES.length - 1;

        //Update the prev button link accordingly
        prevLink = TEXT_NAMES[prevIndex];

        //Index of the next text to be displayed
        const nextIndex = (textIndex < TEXT_NAMES.length - 1) ? textIndex + 1 : 0;

        //Update the prev button link accordingly
        nextLink = TEXT_NAMES[nextIndex];

    } else {

        //If not texts are displayed, add set random links to both buttons
        prevLink = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];
        nextLink = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];
    }

    //Content of the button used to change current language
    const langButton = (props.lang === 'en') ? WEBSITE_TEXT.navbar.language[props.lang] : WEBSITE_TEXT.navbar.language[props.lang];


    //Changes current language
    const changeLanguage = () => {
        if (props.lang === 'en') {
            props.onLanguageChange('pl');
        } else {
            props.onLanguageChange('en');
        }
    };

    //content of the button used to toggle the black-and-white mode - display translucent if the mode is toggled off
    const bwButton = (props.bwMode) ? WEBSITE_TEXT.navbar.colourMode :
        <Translucent>{WEBSITE_TEXT.navbar.colourMode}</Translucent>;

    //toggle the black-and-white mode
    const toggleBwMode = () => {
        props.onBwModeChange(!props.bwMode);
    };

    return (
        <Toolbar>
            <LogoWrapper>
                <Link to='/' className={'textLink'}>
                    <Logo/>
                </Link>
            </LogoWrapper>
            <Options>
                <div onClick={changeLanguage}>{langButton}</div>
            </Options>
            <Options>
                <div onClick={toggleBwMode}>{bwButton}</div>
            </Options>
            <NavLink>
                <Link to={'/texts/' + prevLink}>&lt;</Link>
            </NavLink>
            <NavLink>
                <Link to={'/texts/' + nextLink}>&gt;</Link>
            </NavLink>
        </Toolbar>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        curText: state.currentText
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: (newLang) => dispatch({type: actionTypes.SET_LANGUAGE, language: newLang}),
        onBwModeChange: (newMode) => dispatch({type: actionTypes.SET_BW_MODE, blackAndWhite: newMode})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);