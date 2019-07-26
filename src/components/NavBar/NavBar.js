import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

import { WEBSITE_TEXT } from '../../data/constants';


import * as actionTypes from '../../store/actions';
import {TEXTS, TEXT_NAMES} from '../../data/constants';

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

    //the current url id specifying the text name (if any)
    const urlId = '';

    //specifies text to be linked to the 'next' button
    const checkNextText = () => {
        //default text to be displayed
        let nextText = 'nocturine';

        //if the current url matches any text, specify the next text
        for (let i = 0; i < TEXT_NAMES.length; i++) {
            if (TEXT_NAMES[i] === urlId) {

            }
        }

        return nextText;
    };


    //content of the button used to change current language
    const langButton = (props.lang === 'en') ? WEBSITE_TEXT.navbar.language[props.lang] : WEBSITE_TEXT.navbar.language[props.lang];


    //changes current language
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
        bwMode: state.blackAndWhite
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: (newLang) => dispatch({type: actionTypes.SET_LANGUAGE, language: newLang}),
        onBwModeChange: (newMode) => dispatch({type: actionTypes.SET_BW_MODE, blackAndWhite: newMode})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);