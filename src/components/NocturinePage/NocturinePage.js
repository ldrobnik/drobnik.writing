import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styled from 'styled-components';

import { setTheme, setCurrentText, setNavbarVisibility, setDataNoticeVisible, setMainPage, setBookPage, setPageReload } from "../../actions";
import {FADE_DURATION, AnimatedContent} from './../../data/constants';

import Nocturine from '../About/Nocturine/Book';
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


export const Text = (props) => {

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };


    //theme to be used - based on the current text or black-and-white if the black-and-white mode is on
    const themeToUse = props.bwMode ? 'blackAndWhite' : 'nocturine';

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

    //lets the Redux store know that the Book page is currently displayed
    const setBookDisplayed = () => {
      props.setBookPage(true);
    };

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - Nocturine`;

        //during pre-release promotion --> redirect to preorder page

        //update the theme depending on the text displayed
        updateTheme();

        //show Navbar
        showNavbar();

        //checks whether data storage notice should be visible and if so, turn is on
        checkDataNotice();

        //lets the Redux store know that the main page is currently not displayed
        setMainNotDisplayed();

        ///lets the Redux store know that the Book page is currently displayed
        setBookDisplayed();

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
            <Nocturine />
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SubpageLinks
                    lang={props.lang}
                    reloadPage={reloadPage}
                />
                <SectionSeparator/>
                <CopyrightNote/>
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
        setBookPage,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);