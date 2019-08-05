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
  margin: 0 0.5em;


  
  @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
`;

const OptionButton = styled.div`
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

const Inactive = styled.div`
  cursor: default;
  &:hover {
    animation: none;
  }
`;


const Translucent = styled.div`
  opacity: ${props => props.theme.translucent};
`;

const readIcon = styled.div`
  font-size: 0.8em;
`;

const NavBar = (props) => {


    //The book icon link to a randomly chosen text
    let randomText = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];


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

    //content of the icon used to toggle the black-and-white mode - display translucent if the mode is toggled off
    const bwButton = (props.bwMode) ?
        WEBSITE_TEXT.navbar.colourMode :
        <Translucent>{WEBSITE_TEXT.navbar.colourMode}</Translucent>;

    //content of the icon linking to the Text component - display translucent inactive icon if the Text component is displayed
    const readButton = (props.textDisplayed) ?
        <Inactive>
            <Translucent>{WEBSITE_TEXT.navbar.read}</Translucent>
        </Inactive> :
        <Link to={'/texts/' + randomText}>{WEBSITE_TEXT.navbar.read}</Link>;

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
                        <OptionButton>
                            {readButton}
                        </OptionButton>
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