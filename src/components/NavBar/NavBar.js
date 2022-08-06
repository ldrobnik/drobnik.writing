import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {setLanguage, setBWMode, setPageReload} from '../../actions';
import {
    NavBarWrapper,
    NavToolbar,
    LogoWrapper,
    NavElement,
    NavInactiveElement,
    ToggledNavElement,
    NavLinkContent
} from '../../styles/shared';
import {WEBSITE_TEXT_SHARED, TEXT_NAMES} from '../../data/constants';
import Logo from './Logo/Logo';
import NavLinks from './NavLinks/NavLinks';


const NavBar = props => {

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Specifies the current window width
    const [isMobile, setIsMobile] = useState(false);

    // Specifies whether the read button is clickable
    const [readClickable, setReadClickable] = useState(true);


    //specifies breakpoint for screens below which nav links are not displayed (higher for English version as there's one extra link)
    const mobileBreakpoint = (props.lang === 'en') ? 725 : 685;

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

    //what happens when the read button is clicked
    const handleReadClick = () => {
        //reload page
        reloadPage();

        //make the button unclickable for a while
        setReadClickable(false);
        setTimeout(() => setReadClickable(true), 700);

    };

    //Content of the logo link - if on the home page, make it an anchor link scrolling to top;
    //on other pages, make it a homepage link
    const logoLink = (props.page === 'main') ?
        <AnchorLink
            href='#top'
            title={WEBSITE_TEXT_SHARED.logoButton.top[props.lang]}>
            <Logo/>
            <span className="sr-only">{WEBSITE_TEXT_SHARED.logoButton.top[props.lang]}</span>
        </AnchorLink>
        :
        <Link
            to='/' className={'textLink'}
            onClick={reloadPage}
            title={WEBSITE_TEXT_SHARED.logoButton.home[props.lang]}>
            <Logo/>
            <span className="sr-only">{WEBSITE_TEXT_SHARED.logoButton.home[props.lang]}</span>
        </Link>
    ;

    //Content of the navlinks - display on the main page and on screens larger than mobile
    const navLinks = (props.page === 'main' && !isMobile) ? <NavLinks/> : null;

    //Content of the home button - if on the home page, make it an anchor link scrolling to top
    const homeButton = (props.page === 'main') ?
        <NavElement>
            <AnchorLink href='#top'>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.home[props.lang]}
                </NavLinkContent>
            </AnchorLink>
        </NavElement>
        :
        <NavElement>
            <Link to={'/'}
                  onClick={reloadPage}
            >
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.home[props.lang]}
                </NavLinkContent>
            </Link>
        </NavElement>
    ;

    //Content of the button used to change current language; don't show on the blog page (it's only in English)
    const langButton = (props.page !== 'blog') ?
        <NavElement>
            <div onClick={changeLanguage}>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.language[props.lang]}
                </NavLinkContent>
            </div>
        </NavElement>
        :
        <NavInactiveElement>
            <div>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.language[props.lang]}
                </NavLinkContent>
            </div>
        </NavInactiveElement>;

    //content of the icon used to toggle the black-and-white mode - display translucent if the mode is toggled off; don't display
    const bwButton = (props.bwMode) ?
        (<NavElement>
            <div onClick={toggleBwMode}>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.colourMode[props.lang]}
                </NavLinkContent>
            </div>
        </NavElement>) :
        (<ToggledNavElement>
            <div onClick={toggleBwMode}>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.colourMode[props.lang]}
                </NavLinkContent>
            </div>
        </ToggledNavElement>);

    //A random text
    const randomText = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

    /*If the Writing page is displayed, assign a random text to it.
    * Otherwise, assign no text value (the button will direct to the Writing component */

    let chosenText = (props.page === 'writing') ? randomText : '';

    //variable to hold the read button code
    const readButton = readClickable ?
        <NavElement>
            <Link
                to={'/texts/' + chosenText}
                onClick={() => handleReadClick()}>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.read[props.lang]}
                </NavLinkContent>
            </Link>
        </NavElement> :
        <NavElement>
            <NavLinkContent>
                {WEBSITE_TEXT_SHARED.navbar.read[props.lang]}
            </NavLinkContent>
        </NavElement>;

    //content of the icon linking to the Text component; if the main blog page is displayed, scroll to top;
    // if one of blog posts, make it link to the main blog page
    const blogButton = (props.page === 'blog' && props.location.pathname.length < 7) ?
        <NavElement>
            <AnchorLink href='#top'>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.blog[props.lang]}
                </NavLinkContent>
            </AnchorLink>
        </NavElement> :
        <NavElement>
            <Link
                to={'/blog'}
                onClick={reloadPage}>
                <NavLinkContent>
                    {WEBSITE_TEXT_SHARED.navbar.blog[props.lang]}
                </NavLinkContent>
            </Link>
        </NavElement>;

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
                    {blogButton}
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