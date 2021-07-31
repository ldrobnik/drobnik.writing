import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {setLanguage, setBWMode, setPageReload} from '../../actions';
import {NavBarWrapper, NavToolbar, LogoWrapper, NavElement, ToggledNavElement, NavLinkContent} from '../../styled';
import {WEBSITE_TEXT, TEXT_NAMES} from '../../data/constants';
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';


const NavBar = (props) => {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Specifies the current window width
    const [isMobile, setIsMobile] = useState(false);

    //specifies breakpoint for screens below which nav links are not displayed
    const mobileBreakpoint = 685;

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

        //new language that is different to the current language
        const newLanguage = (props.lang === 'en') ? 'pl' : 'en';

        //change Redux state
        props.setLanguage(newLanguage);

        //store the state in localStorage
        localStorage.setItem('language', newLanguage);
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
    const logoLink = (props.page === 'main') ?
        <AnchorLink href='#top'>
            <Logo/>
        </AnchorLink>
        :
        <Link
            to='/' className={'textLink'}
            onClick={reloadPage}>
            <Logo/>
        </Link>
    ;

    //Content of the navlinks - display on the main page and on screens larger than mobile
    const navLinks = (props.page === 'main' && !isMobile) ? <NavLinks/> : <div></div>;

    //Content of the home button - if on the home page, make it an anchor link scrolling to top
    const homeButton = (props.page === 'main') ?
        <NavElement>
            <AnchorLink href='#top'>
                <NavLinkContent>
                    {WEBSITE_TEXT.navbar.home[props.lang]}
                </NavLinkContent>
            </AnchorLink>
        </NavElement>
        :
        <NavElement>
            <Link to={'/'}
                  onClick={reloadPage}
            >
                <NavLinkContent>
                    {WEBSITE_TEXT.navbar.home[props.lang]}
                </NavLinkContent>
            </Link>
        </NavElement>
    ;

    //Content of the button used to change current language; don't show on the blog page (it's only in English)
    const langButton = (props.page !== 'blog') ?
        <NavElement>
            <div onClick={changeLanguage}>
                <NavLinkContent>
                    {WEBSITE_TEXT.navbar.language[props.lang]}
                </NavLinkContent>
            </div>
        </NavElement>
        : null;

    //content of the icon used to toggle the black-and-white mode - display translucent if the mode is toggled off; don't display
    const bwButton = (props.bwMode) ?
        (<NavElement>
            <div onClick={toggleBwMode}>
                <NavLinkContent>
                    {WEBSITE_TEXT.navbar.colourMode[props.lang]}
                </NavLinkContent>
            </div>
        </NavElement>) :
        (<ToggledNavElement>
            <div onClick={toggleBwMode}>
                <NavLinkContent>
                    {WEBSITE_TEXT.navbar.colourMode[props.lang]}
                </NavLinkContent>
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

    //specifies whether the Book subpage is displayed

    /*If the Text page is currently displayed, assigned the next text to the read link.
   //     * If the Book page is displayed, assing nocturine
   //     * If the About page is displayed, assign a random text to it.
   //     */
    const chosenText = props.mainDisplayed ? randomText : (props.nocturine ? 'nocturine' : nextText);


    //content of the icon linking to the Text component - display translucent inactive icon if the Text component is displayed
    const readButton = (
        <NavElement>
            <Link
                to={'/texts/' + chosenText}
                onClick={reloadPage}>
                <NavLinkContent>
                    {WEBSITE_TEXT.navbar.read[props.lang]}
                </NavLinkContent>
            </Link>
        </NavElement>
    );

    //class applied to the component content, depending on the navbar visibility state in the Redux store
    const contentClass = (props.showNavbar) ? '' : 'hidden';

    return (
        <NavBarWrapper>
            <div className={contentClass}>
                <NavToolbar>
                    <LogoWrapper>
                        {logoLink}
                    </LogoWrapper>
                    {navLinks}
                    {homeButton}
                    {langButton}
                    {bwButton}
                    {readButton}
                </NavToolbar>
            </div>
        </NavBarWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        curText: state.currentText,
        showNavbar: state.navbarVisible,
        page: state.pageDisplayed,
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