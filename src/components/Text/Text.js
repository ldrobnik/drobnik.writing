import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";

import { setTheme, setCurrentText, setNavbarVisibility, setDataNoticeVisible, setMainPage, setNocturinePage, setPageReload } from "../../actions";
import {TEXTS, TEXT_NAMES, FADE_DURATION, AnimatedContent} from './../../data/constants';

import Credits from './Credits/Credits';
import DescriptionPanel from './DescriptionPanel/DescriptionPanel';
import NextTextLink from './NextTextLink/NextTextLink';
import SectionSeparator from "../UI/SectionSeparator/SectionSeparator";
import SubpageLinks from '../UI/SubpageLinks/SubpageLinks';
import CopyrightNote from "../UI/CopyrightNote/CopyrightNote";

/* STYLED COMPONENTS */
const TopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

const Wrapper = styled.div`
  overflow: hidden;
  padding: 7em 1em 2em 1em;
  
  .centered {
    text-align: center;
  }

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

export const Text = (props) => {

    //specifies whether 'up next' link should be displayed
    const [linkVisible, setlinkVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
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
        props.setPageReload(true);
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

    //updates the currently displayed text
    const updateText = () => {
        props.setCurrentText(textName);
    };

    //theme to be used - based on the current text or black-and-white if the black-and-white mode is on
    const themeToUse = props.bwMode ? 'blackAndWhite' : TEXTS[props.lang][textName].theme;

    //updates current theme
    const updateTheme = () => {
        props.setTheme(themeToUse);
    };

    //shows the NavBar
    const showNavbar = () => {
        props.setNavbarVisibility(true);
    };

    //checks whether the data storage notice should be displayed and turns it on if it is invisible but hasn't been confirmed yet
    const checkDataNotice = () => {
        if (!props.noticeAccepted) {
            props.setDataNoticeVisible(true);
        }
    };

    //lets the Redux store know that the Main page is currently not displayed
    const setMainNotDisplayed = () => {
        props.setMainPage(false)
    };

    //lets the Redux store know that the Nocturine page is currently not displayed
    const setNocturineNotDisplayed = () => {
        props.setNocturinePage(false);
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

        //lets the Redux store know that the main page is currently not displayed
        setMainNotDisplayed();

        //lets the Redux store know that the Nocturine page is currently not displayed
        setNocturineNotDisplayed();

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
                <SubpageLinks
                    lang={props.lang}
                    reloadPage={reloadPage}
                />
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
    return bindActionCreators({
        setTheme,
        setCurrentText,
        setNavbarVisibility,
        setDataNoticeVisible,
        setMainPage,
        setNocturinePage,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);