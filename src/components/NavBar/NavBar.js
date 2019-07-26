import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

import * as actionTypes from '../../store/actions';
import { WEBSITE_TEXT, TEXTS, TEXT_NAMES} from '../../data/constants';

const Toolbar = styled.header`
    height: 3em;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
    box-sizing: border-box;
    background-color: ${props => props.theme.background};
    opacity: ${props => props.theme.background};
    z-index: 90;
`;

const Translucent = styled.span`
  opacity: ${props => props.theme.translucent};
`;


const NavBar = (props) => {

    //The currently displayed text
    const currentText = props.curText;

    //The prev button link - by default it is the last available text
    let prevLink = TEXT_NAMES.slice(-1)[0];

    //The next button link -  by default it is the first available text
    let nextLink = TEXT_NAMES[0];

    //If any text is displayed, change the previous and next button links accordingly
    if (currentText !== '') {
        //The index of the currently displayed text
        const textIndex = TEXT_NAMES.indexOf(props.curText);

        //Change the prev button link depending on the current text
        prevLink = (textIndex > 0) ? textIndex - 1 : TEXT_NAMES.length;

        //Change the next button link depending on the current text
        nextLink = (textIndex < TEXT_NAMES.length - 1) ? textIndex + 1 : 0;

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
    const bwButton = (props.bwMode) ? WEBSITE_TEXT.navbar.colourMode : <Translucent>{WEBSITE_TEXT.navbar.colourMode}</Translucent>;

    //toggle the black-and-white mode
    const toggleBwMode = () => {
        props.onBwModeChange(!props.bwMode);
    };

    return (
        <Toolbar>
            <Link to='/' className={'textLink'}>{WEBSITE_TEXT.navbar.title} – {WEBSITE_TEXT.navbar.subtitle[props.lang]}</Link>&nbsp;
            <div onClick={changeLanguage}>{langButton}</div>
            <div onClick={toggleBwMode}>{bwButton}</div>
            <Link to={'/texts/'}>&lt;</Link>
            <Link to={'/texts/'}>&gt;</Link>
            {TEXT_NAMES.map((textName) => {
                return (
                    <p key={textName}>
                        <Link to={'/texts/' + textName}>{TEXTS[props.lang][textName].title}</Link>
                    </p>
                )
            })}
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