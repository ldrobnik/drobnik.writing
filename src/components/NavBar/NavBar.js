import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import Logo from './Logo/Logo';
import * as actionTypes from '../../store/actions';
import {WEBSITE_TEXT, TEXT_NAMES, PULSATE_KEYFRAMES, FADE_DURATION} from '../../data/constants';

/* STYLED COMPONENTS */
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
  margin: ${props => props.theme.navIconMargin};

  @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
`;

const ToggledNavElement = styled.div`
  cursor: pointer;
  margin: ${props => props.theme.navIconMargin};
  opacity: ${props => props.theme.translucent};

  @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
`;

const InactiveElement = styled.div`
  cursor: default;
  margin: ${props => props.theme.navIconMargin};
  opacity: ${props => props.theme.transparent};

`;

const LinkContent = styled.div`
  padding: ${props => props.theme.navIconPadding};
      display: block;
      min-width: 1.5em;
`;

const NavBar = (props) => {


    //Changes current language
    const changeLanguage = () => {

        //Scrolls to top
        window.scrollTo(0, 0);

        //play the page reloading animation
        props.onReloadChange(true);



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


        //set the opposite state to the current one
        const newColorMode = (!props.bwMode) ? 'b&w' : 'color';

        //update redux State
        props.onBwModeChange(!props.bwMode);

        //store new state in localStorage
        localStorage.setItem('colorMode', newColorMode);

    };

    //sets off page reloading animation
    const reloadPage = () => {
        props.onReloadChange(true);
    };


    //Content of the logo link - if on the home page, make it an anchor link scrolling to top
    const logoLink = (props.textDisplayed) ?
        <Link
            to='/' className={'textLink'}
            onClick={reloadPage}>
            <Logo/>
        </Link> :
        <AnchorLink href='#top'>
            <Logo/>
        </AnchorLink>;


    //Content of the home button - if on the home page, make it an anchor link scrolling to top
    const homeButton = (props.textDisplayed) ?
        <NavElement>
            <Link to={'/'}
                  onClick={reloadPage}
            >
                <LinkContent>
                    {WEBSITE_TEXT.navbar.home}
                </LinkContent>
            </Link>
        </NavElement> :
        <NavElement>
            <AnchorLink href='#top'>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.home}
                </LinkContent>
            </AnchorLink>
        </NavElement>;

    //Content of the button used to change current language
    const langButton =
        <NavElement>
            <div onClick={changeLanguage}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.language[props.lang]}
                </LinkContent>
            </div>
        </NavElement>;

    //content of the icon used to toggle the black-and-white mode - display translucent if the mode is toggled off
    const bwButton = (props.bwMode) ?
        <NavElement>
            <div onClick={toggleBwMode}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.colourMode}
                </LinkContent>
            </div>
        </NavElement> :
        <ToggledNavElement>
            <div onClick={toggleBwMode}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.colourMode}
                </LinkContent>
            </div>
        </ToggledNavElement>;

    //The book icon link to a randomly chosen text
    let randomText = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

    //content of the icon linking to the Text component - display translucent inactive icon if the Text component is displayed
    const readButton = (props.textDisplayed) ?
        <InactiveElement>
            <div>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.read}
                </LinkContent>
            </div>
        </InactiveElement>
        :
        <NavElement>
            <Link
                to={'/texts/' + randomText}
                onClick={reloadPage}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.read}
                </LinkContent>
            </Link>
        </NavElement>;


    //class applied to the component content, depending on the navbar visibility state in the Redux store
    const contentClass = (props.showNavbar) ? '' : 'hidden';

    return (
        <Wrapper>
            <div className={contentClass}>
                <Toolbar>
                    <LogoWrapper>
                        {logoLink}
                    </LogoWrapper>
                    {homeButton}
                    {langButton}
                    {bwButton}
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
        textDisplayed: state.textPageDisplayed,
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: (newLang) => dispatch({
            type: actionTypes.SET_LANGUAGE,
            language: newLang}),
        onBwModeChange: (newMode) => dispatch({
            type: actionTypes.SET_BW_MODE,
            blackAndWhite: newMode}),
        onReloadChange: (newState) => dispatch({
        type: actionTypes.SET_PAGE_RELOAD,
        pageReload: newState
    })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);