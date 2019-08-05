import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import {connect} from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

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
  margin: 0 0.5em;
  Link, a, div {
      padding: 1em;
      display: block;
  }

  
  @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
`;

const ToggledNavElement = styled.div`
  cursor: pointer;
  margin: 0 0.5em;
  opacity: ${props => props.theme.translucent};\
  
  Link, a, div {
      padding: 1em;
      display: block;
  }
  
  @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
`;

const InactiveElement = styled.div`
  cursor: default;
  margin: 0 0.5em;
  opacity: ${props => props.theme.translucent};
  
 Link, a, div {
      padding: 1em;
      display: block;
  }
`;



const NavBar = (props) => {


    //The book icon link to a randomly chosen text
    let randomText = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];


    //Content of the button used to change current language
    const langButton = (props.lang === 'en') ? WEBSITE_TEXT.navbar.language[props.lang] : WEBSITE_TEXT.navbar.language[props.lang];

    //content of the icon used to toggle the black-and-white mode - display translucent if the mode is toggled off
    const bwButton = (props.bwMode) ?
        <NavElement>
            {WEBSITE_TEXT.navbar.colourMode}
        </NavElement> :
        <ToggledNavElement>
            {WEBSITE_TEXT.navbar.colourMode}
        </ToggledNavElement>;

    //content of the icon linking to the Text component - display translucent inactive icon if the Text component is displayed
    const readButton = (props.textDisplayed) ?
        <InactiveElement>
            {WEBSITE_TEXT.navbar.read}
        </InactiveElement>
        :
        <NavElement>
            <Link to={'/texts/' + randomText}>{WEBSITE_TEXT.navbar.read}</Link>
        </NavElement>;

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

    //toggle the black-and-white mode
    const toggleBwMode = () => {

        const newColorMode = (!props.bwMode) ? 'b&w' : 'color';

        //update redux State
        props.onBwModeChange(!props.bwMode);

        //store new state in localStorage
        localStorage.setItem('colorMode', newColorMode);

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
                        <div onClick={changeLanguage}>{langButton}</div>
                    </NavElement>
                    <NavElement>
                        <div onClick={toggleBwMode}>{bwButton}</div>
                    </NavElement>
                    {readButton}
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
        showNavbar: state.navbarVisible,
        textDisplayed: state.textPageDisplayed
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: (newLang) => dispatch({type: actionTypes.SET_LANGUAGE, language: newLang}),
        onBwModeChange: (newMode) => dispatch({type: actionTypes.SET_BW_MODE, blackAndWhite: newMode})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);