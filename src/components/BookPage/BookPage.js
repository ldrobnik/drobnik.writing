import React, {useEffect} from 'react';
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
import {BookPageTopAnchor, BookPageWrapper, FADE_DURATION} from '../../styled';
import {AnimatedContent} from '../../posed';
import {BOOKS} from './../../data/constants';
import Book from '../About/Book/Book';
import SectionSeparator from '../UI/SectionSeparator/SectionSeparator';
import InvisibleSeparator from '../UI/InvisibleSeparator/InvisibleSeparator';
import SubpageLinks from '../UI/SubpageLinks/SubpageLinks';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';


export const BookPage = (props) => {

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };


    //theme to be used - based on the current text or black-and-white if the black-and-white mode is on
    const themeToUse = props.bwMode ? 'blackAndWhite' : BOOKS[props.book].id;

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

    //lets the Redux store know which page is currently displayed
    const setCurrentPage = (page) => {
        props.setPage(page);
    }

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

        //lets the Redux store know that the book page is currently displayed
        setCurrentPage('book');

        //show content after a while if page has loaded
        if (props.loaded) {
            setTimeout(showContent, FADE_DURATION);
        }

    });

    //do not show the content until the page is loaded
    return props.loaded &&
        <BookPageWrapper>
            <BookPageTopAnchor>
                <div id='top'></div>
            </BookPageTopAnchor>
            <Book book={props.book}/>
            <InvisibleSeparator/>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SubpageLinks
                    lang={props.lang}
                    reloadPage={reloadPage}
                />
                <SectionSeparator/>
                <CopyrightNote/>
            </AnimatedContent>
        </BookPageWrapper>;
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

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);