import React, {useEffect, useState} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    setTheme,
    setCurrentText,
    setNavbarVisibility,
    setDataNoticeVisible,
    setPage,
    setPageReload
} from '../../actions';
import {AnimatedContent} from '../../animations/shared';
import {SectionSeparator, FADE_DURATION} from '../../styles/shared';
import {
    WritingWrapper,
    WritingTopAnchor,
    WritingTitle, WritingSectionHeading
} from '../../styles/writing';
import {TEXT_NAMES, WEBSITE_TEXT_TEXTS} from './../../data/constants';
import WritingBio from './WritingBio/WritingBio';
import ReadList from '../ReadList/ReadList';
import SubpageLinks from '../UI/SubpageLinks/SubpageLinks';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';

export const Writing = props => {

    //specifies whether the whole link list should be visible
    const [linkListVisible, setLinkListVisible] = useState(false);
    //specifies the text link animation should start
    const [linksVisible, setLinksVisible] = useState(false);

    //updates current theme
    const updateTheme = () => {
        //randomly selected theme
        const randomTheme = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

        //theme to be used - black-and-white if the black-and-white mode is on or the randomly selected theme
        const themeToUse = props.bwMode ? 'blackAndWhite' : randomTheme;
        props.setTheme(themeToUse);
    };

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //checks whether the data storage notice should be displayed and turns it on if it is invisible but hasn't been confirmed yet
    const checkDataNotice = () => {
        if (!props.noticeAccepted) {
            props.setDataNoticeVisible(true);
        }
    };

    //shows the NavBar
    const showNavbar = () => {
        props.setNavbarVisibility(true);
    };

    //lets the Redux store know which page is currently displayed
    const setCurrentPage = page => {
        props.setPage(page);
    }

    useEffect(() => {
        //Update page title with the piece title
        document.title = WEBSITE_TEXT_TEXTS.writing.title[props.lang];

        //show Navbar
        showNavbar();

        //change theme to a random one
        updateTheme();

        //checks whether data storage notice should be visible and if so, turn is on
        checkDataNotice();

        //lets the Redux store know that the Text page is currently displayed
        setCurrentPage('writing');

        //show content after a while if page has loaded
        if (props.loaded) {
            setTimeout(showContent, FADE_DURATION);
            setTimeout(setLinkListVisible(true), FADE_DURATION);
            setTimeout(setLinksVisible(true), FADE_DURATION * 2); //show text links after a longer while
        }
    });


    //do not show the content until the page is loaded
    return props.loaded &&
        <WritingWrapper>
            <WritingTopAnchor>
                <div id='top'></div>
            </WritingTopAnchor>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}
            >
                <WritingTitle>{WEBSITE_TEXT_TEXTS.writing.title[props.lang]}</WritingTitle>
                <WritingBio lang={props.lang}/>
                <WritingSectionHeading>
                    {WEBSITE_TEXT_TEXTS.writing.samples[props.lang]}
                </WritingSectionHeading>
            </AnimatedContent>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}
            >
            {linkListVisible && <ReadList linksVisible={linksVisible}/>}
            </AnimatedContent>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}
            >
                <SubpageLinks
                    lang={'en'}
                    reloadPage={reloadPage}
                    mainHidden={true}
                />
                <SectionSeparator/>
                <CopyrightNote/>
            </AnimatedContent>
        </WritingWrapper>;
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
        setPage,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Writing);