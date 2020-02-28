import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {setLanguage, setBWMode, setPageReload} from "../../actions";
import {WEBSITE_TEXT, TEXT_NAMES, PULSATE_KEYFRAMES} from '../../data/constants';

import Logo from './Logo/Logo';

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
    z-index: 50;
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

const LinkContent = styled.div`
  padding: ${props => props.theme.navIconPadding};
  display: block;
  min-width: 1.5em;
`;

const NavBar = (props) => {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Specifies the current window width
    const [isMobile, setIsMobile] = useState(false);

    //specifies breakpoint for screens below which nav links are not displayed
    const mobileBreakpoint = 600;

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth); //update the window width state with the current window width
        handleMobile();
    };

    //checks whether the site is displayed on a mobile device
    const handleMobile = () => {
        if (windowWidth < mobileBreakpoint) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {

        //check whether the site is displayed on a mobile device
        handleMobile();

        window.addEventListener('resize', handleWindowSizeChange); // Add an event listener to monitor the screen width

        return () => {

            window.removeEventListener('resize', handleWindowSizeChange); //remove the listener when the component unmounts
        }
    });

    //Changes current language
    const changeLanguage = () => {
        //Scrolls to top
        window.scrollTo(0, 0);

        //play the page reloading animation
        props.setPageReload(true);

        if (props.lang === 'en') {
            //change Redux state
            props.setLanguage('pl');

            //store the state in localStorage
            localStorage.setItem('language', 'pl');
        } else {
            //change Redux state
            props.setLanguage('en');

            //store the state in localStorage
            localStorage.setItem('language', 'en');
        }
    };

    //toggle the black-and-white mode
    const toggleBwMode = () => {

        //set the opposite state to the current one
        const newColorMode = (!props.bwMode) ? 'b&w' : 'color';

        //update redux State
        props.setBWMode(!props.bwMode);

        //store new state in localStorage
        localStorage.setItem('colorMode', newColorMode);

    };

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
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

    //Content of the navlinks - display on main page (not Text) and on screens larger than mobile
    const navLinks = (!props.textDisplayed && !isMobile) ? <div>NAVLINKS</div> : <div></div>;

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
    const langButton = (
        <NavElement>
            <div onClick={changeLanguage}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.language[props.lang]}
                </LinkContent>
            </div>
        </NavElement>
    );

    //content of the icon used to toggle the black-and-white mode - display translucent if the mode is toggled off
    const bwButton = (props.bwMode) ?
        (<NavElement>
            <div onClick={toggleBwMode}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.colourMode}
                </LinkContent>
            </div>
        </NavElement>) :
        (<ToggledNavElement>
            <div onClick={toggleBwMode}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.colourMode}
                </LinkContent>
            </div>
        </ToggledNavElement>);

    //the index of the text
    const textIndex = TEXT_NAMES.indexOf(props.curText);

    //The index of the next text in line - if the last text, choose the first one
    const nextTextIndex = (textIndex < TEXT_NAMES.length - 1) ? textIndex + 1 : 0;

    //The next text to be displayed
    const nextText = TEXT_NAMES[nextTextIndex];
    //A random text
    const randomText = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

    /*If the Text page is currently displayed, assigned the next text to the read link.
   //     * If the About page is displayed, assign a random text to it.
   //     */
    const chosenText = props.textDisplayed ? nextText : randomText;


    //content of the icon linking to the Text component - display translucent inactive icon if the Text component is displayed
    const readButton = (
        <NavElement>
            <Link
                to={'/texts/' + chosenText}
                onClick={reloadPage}>
                <LinkContent>
                    {WEBSITE_TEXT.navbar.read}
                </LinkContent>
            </Link>
        </NavElement>
    );

    //class applied to the component content, depending on the navbar visibility state in the Redux store
    const contentClass = (props.showNavbar) ? '' : 'hidden';

    return (
        <Wrapper>
            <div className={contentClass}>
                <Toolbar>
                    <LogoWrapper>
                        {logoLink}
                    </LogoWrapper>
                    {navLinks}
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
    return bindActionCreators({
        setLanguage,
        setBWMode,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);