import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';

import { WEBSITE_TEXT } from '../../data/constants';


import * as actionTypes from '../../store/actions';
import {TEXTS, TEXT_NAMES} from '../../data/constants';

const Translucent = styled.span`
  opacity: ${props => props.theme.translucent};
`;


const NavBar = (props) => {

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
        <React.Fragment>
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
        </React.Fragment>
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