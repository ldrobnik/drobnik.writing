import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {connect} from 'react-redux';

import Logo from './Logo/Logo';
import * as actionTypes from '../../store/actions';
import {WEBSITE_TEXT, TEXT_NAMES, PULSATE_KEYFRAMES} from '../../data/constants';

const Wrapper = styled.div`
      .hidden {
      display: none;
    }
    
`;

const Toolbar = styled.header`
    height: 3em;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    background-color: ${props => props.theme.background};
    z-index: 90;
    font-weight: bold;
    user-select: none;
    backdrop-filter: blur(8px);
`;


const LogoWrapper = styled.div`
  position: absolute;
  top: -4px;
  left: -2px;
  
   @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
`;

const NavElement = styled.div`
  cursor: pointer;
  margin-left: 1em;


  
  @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
`;

const OptionButton = styled.span`
    font-size: 1em;
    div {
      padding: 1em;
      display: block;
    }
`;

const NavLink = styled.div`
  font-size: 1.3em;
      a {
    padding: 1em;
    display: block;
  }

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
            //change Redux state
            props.onLanguageChange('pl');

            //store the state in localStorage
            localStorage.setItem('language', 'pl');
        } else {
            //change Redux state
            props.onLanguageChange('en');

            //store the state in localStorage
            localStorage.setItem('language', 'en');
        }
    };

    //content of the button used to toggle the black-and-white mode - display translucent if the mode is toggled off
    const bwButton = (props.bwMode) ? WEBSITE_TEXT.navbar.colourMode :
        <Translucent>{WEBSITE_TEXT.navbar.colourMode}</Translucent>;

    //toggle the black-and-white mode
    const toggleBwMode = () => {
        props.onBwModeChange(!props.bwMode);
    };

    //class applied to the component content, depending on the navbar visibility state in the Redux store
    const contentClass = (props.showNavbar) ? '' : 'hidden';

    return (
        <Wrapper>
            <div className={contentClass}>
                <Toolbar>
                    <LogoWrapper>
                        <Link to='/' className={'textLink'}>
                            <Logo/>
                        </Link>
                    </LogoWrapper>
                    <NavElement>
                        <OptionButton>
                            <div onClick={changeLanguage}>{langButton}</div>
                        </OptionButton>
                    </NavElement>
                    <NavElement>
                        <OptionButton>
                            <div onClick={toggleBwMode}>{bwButton}</div>
                        </OptionButton>
                    </NavElement>
                    <NavElement>
                        <NavLink>
                            <Link to={'/texts/' + prevLink}>&lt;</Link>
                        </NavLink>
                    </NavElement>
                    <NavElement>
                        <NavLink>
                            <Link to={'/texts/' + nextLink}>&gt;</Link>
                        </NavLink>
                    </NavElement>
                </Toolbar>
            </div>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        curText: state.currentText,
        showNavbar: state.navbarVisible
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: (newLang) => dispatch({type: actionTypes.SET_LANGUAGE, language: newLang}),
        onBwModeChange: (newMode) => dispatch({type: actionTypes.SET_BW_MODE, blackAndWhite: newMode})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);