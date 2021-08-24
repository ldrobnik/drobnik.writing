import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setTheme, setNavbarVisibility, setDataNoticeVisible, setPage} from '../../actions';
import {AboutWrapper, AboutTopAnchor, AboutSectionWrapper} from '../../styled';
import {BOOKS, TEXT_NAMES, WEBSITE_TEXT} from './../../data/constants';
import Intro from './Intro/Intro';
import Book from './Book/Book';
import Pubs from './Pubs/Pubs';
import Read from './Read/Read';
import CopyrightNote from './../UI/CopyrightNote/CopyrightNote';

export const About = props => {

    //updates current theme
    const updateTheme = () => {
        //randomly selected theme
        const randomTheme = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

        //theme to be used - black-and-white if the black-and-white mode is on or the randomly selected theme
        const themeToUse = props.bwMode ? 'blackAndWhite' : randomTheme;
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
        document.title = `${WEBSITE_TEXT.author} - ${WEBSITE_TEXT.title[props.lang]}`;

        //change theme to a random one
        updateTheme();

        //show Navbar
        showNavbar();

        //checks whether data storage notice should be visible and if so, turn is on
        checkDataNotice();

        //lets the Redux store that the main page is currently displayed
        setCurrentPage('main');
    });

    //do not show the content until the page is loaded
    return props.loaded &&
        <AboutWrapper>
            <AboutTopAnchor>
                <div id='top'></div>
            </AboutTopAnchor>
            <AboutSectionWrapper>
                <Intro/>
            </AboutSectionWrapper>
            <AboutSectionWrapper id='books'>
                {BOOKS.slice().reverse().map((book, k) => {
                    return (
                        book.displayOnMain && <AboutSectionWrapper id={book.id} key={book.id}>
                            <Book book={BOOKS.indexOf(book)}/>
                        </AboutSectionWrapper>
                    );
                })}
            </AboutSectionWrapper>
            <AboutSectionWrapper id='pubs'>
                <Pubs/>
            </AboutSectionWrapper>
            <AboutSectionWrapper id='read'>
                <Read/>
            </AboutSectionWrapper>
            <CopyrightNote/>
        </AboutWrapper>;
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        noticeVisible: state.dataNoticeVisible,
        noticeAccepted: state.dataNoticeAccepted,
        loaded: state.pageLoaded
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setTheme,
        setNavbarVisibility,
        setDataNoticeVisible,
        setPage
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(About);