import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Waypoint} from "react-waypoint";

import * as actionTypes from './../../store/actions';
import {TEXTS, TEXT_NAMES, WEBSITE_TEXT, FADE_DURATION, PULSATE_KEYFRAMES, AnimatedContent} from './../../data/constants';

import Credits from './Credits/Credits';
import DescriptionPanel from './DescriptionPanel/DescriptionPanel';
import NextTextLink from './NextTextLink/NextTextLink';
import SectionSeparator from "./../UI/SectionSeparator/SectionSeparator";
import CopyrightNote from "./../UI/CopyrightNote/CopyrightNote";

/* STYLED COMPONENTS */
const TopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

const Wrapper = styled.div`
  overflow: hidden;
  padding: 7em 1em 2em 1em;

  @media all and (min-width: ${props => props.theme.extraSmallScr}) {
      padding: 7em 3em 2em 3em;
  }
    
  @media all and (min-width: ${props => props.theme.smallScr}) {
      padding: 7em 10% 2em 10%;
  }
    
  @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding: 7em 20% 2em 20%;
  }
    
  @media all and (min-width: ${props => props.theme.largeScr}) {
      padding: 7em 25% 2em 25%;
  }
    
  @media all and (min-width: ${props => props.theme.extraLargeScr}) {
      padding: 7em 32% 2em 32%;
  }
`;

const Header = styled.div`
    text-align: center;
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding-right: 1em;
    }
`;

const TextTitle = styled.div`
    font-size: ${props => props.theme.titleSize};
    font-weight: bold;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 15vw;
    }
`;

const TextSubtitle = styled.div`
    font-size: ${props => props.theme.subtitleSize};
    font-weight: bold;
    font-style: italic;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 8vw;
    }
`;

const TextBody = styled.div`
    font-family: ${props => props.theme.serif};
    font-size: ${props => props.theme.bodySize};
    line-height: 1.4em;
    position: relative;
    margin-top: 2em;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${props => props.theme.captionSize}
  user-select: none;
  margin: 1em 0;
  text-decoration: underline;
  
  div {
    padding: 0 0.3em;
    
    @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }  
  }
`;

/* POSE */
const AnimatedLink = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        delay: 200,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

const Text = (props) => {

    //specifies whether 'up next' link should be displayed
    const [linkVisible, setlinkVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.onReloadChange(false);
    };

    //shows the 'up next' link
    const showLink = () => {
        setlinkVisible(true);
    };

    //hides the 'up next' link
    const hideLink = () => {
        setlinkVisible(false);
    };

    //sets off page reloading animation
    const reloadPage = () => {
        props.onReloadChange(true);
    };

    //Checks if the id in the current url matches any text; if not, returns 'nocturine'
    const checkTextID = (name) => {

        for (let i = 0; i < TEXT_NAMES.length; i++) {
            if (TEXT_NAMES[i] === name) return name;
        }

        //if unknown id, display 'nocturine'
        return 'nocturine';
    };

    //constant holding the name of the text to be displayed
    const textName = checkTextID(props.match.params.id);

    //the index of the text
    const textIndex = TEXT_NAMES.indexOf(textName);

    //The next text to be displayed;
    const nextTextId = (textIndex < TEXT_NAMES.length - 1) ? textIndex + 1 : 0;


    //The next text name
    const nextTextName = TEXT_NAMES[nextTextId];

    //The Back to Top link
    const top = <AnchorLink href='#top'>{WEBSITE_TEXT.text.top[props.lang]}</AnchorLink>;

    //The Home link
    const home = <Link
        to={'/'}
        onClick={reloadPage}
    >{WEBSITE_TEXT.text.home[props.lang]}</Link>;

    //updates the currently displayed text
    const updateText = () => {
        props.onTextChange(textName);
    };

    //theme to be used - based on the current text or black-and-white if the black-and-white mode is on
    const themeToUse = props.bwMode ? 'blackAndWhite' : TEXTS[props.lang][textName].theme;

    //updates current theme
    const updateTheme = () => {
        props.onThemeChange(themeToUse);
    };

    //shows the NavBar
    const showNavbar = () => {
        props.onSetNavbar(true);
    };

    //checks whether the data storage notice should be displayed and turns it on if it is invisible but hasn't been confirmed yet
    const checkDataNotice = () => {
        if (!props.noticeAccepted) {
            props.onSetNotice(true);
        }
    };

    //lets the Redux store know that the Text page is currently displayed
    const setTextDisplayed = () => {
        props.onSetTextPage(true)
    };

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${TEXTS[props.lang][textName].title}`;

        //update the theme depending on the text displayed
        updateTheme();

        //update the currently displayed text
        updateText();

        //show Navbar
        showNavbar();

        //checks whether data storage notice should be visible and if so, turn is on
        checkDataNotice();

        //lets the Redux store know that the Text page is currently displayed
        setTextDisplayed();

        //show content after a while if page has loaded
        if (props.loaded) {
            setTimeout(showContent, FADE_DURATION);
        }

    });

    //do not show the content until the page is loaded
    return props.loaded ?
        (<Wrapper>
            <TopAnchor>
                <div id='top'></div>
            </TopAnchor>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <Header>
                    <TextTitle>
                        {TEXTS[props.lang][textName].title}
                    </TextTitle>
                    <TextSubtitle>
                        {TEXTS[props.lang][textName].subtitle}
                    </TextSubtitle>
                </Header>
                <TextBody>
                    {TEXTS[props.lang][textName].content}
                </TextBody>
                <Waypoint
                    onEnter={hideLink}
                />
                <Credits
                    lang={props.lang}
                    textName={textName}/>
                <DescriptionPanel
                    description={TEXTS[props.lang][textName].description}
                    title={TEXTS[props.lang][textName].title}
                />
            </AnimatedContent>
            <Waypoint
                onEnter={showLink}
            />
            <AnimatedLink
                pose={linkVisible ? 'visible' : 'hidden'}
            >
                <NextTextLink
                    textName={nextTextName}
                    lang={props.lang}
                />
            </AnimatedLink>
            <Waypoint
                onEnter={showLink}
            />
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <Links>
                    <div>{top}</div>
                    <div>{home}</div>
                </Links>
                <Waypoint
                    onEnter={showLink}
                />
                <SectionSeparator/>
                <CopyrightNote/>
                <Waypoint
                    onEnter={showLink}
                />
            </AnimatedContent>
        </Wrapper>) :
        <div></div>;
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        noticeVisible: state.dataNoticeVisible,
        noticeAccepted: state.dataNoticeAccepted,
        reload: state.pageReload,
        loaded: state.pageLoaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onThemeChange: (newTheme) => dispatch({
            type: actionTypes.SET_THEME,
            theme: newTheme
        }),
        onTextChange: (newText) => dispatch({
            type: actionTypes.SET_CURRENT_TEXT,
            currentText: newText
        }),
        onSetNavbar: (newState) => dispatch({
            type: actionTypes.SET_NAVBAR_VISIBILITY,
            navbarVisible: newState
        }),
        onSetNotice: (newState) => dispatch({
            type: actionTypes.SET_DATA_NOTICE_VISIBLE,
            dataNoticeVisible: newState
        }),
        onSetTextPage: (newState) => dispatch({
            type: actionTypes.SET_TEXT_PAGE,
            textPageDisplayed: newState
        }),
        onReloadChange: (newState) => dispatch({
            type: actionTypes.SET_PAGE_RELOAD,
            pageReload: newState
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);