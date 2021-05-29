import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import styled from 'styled-components';

import {setTheme, setNavbarVisibility, setDataNoticeVisible, setMainPage, setBookPage} from "../../actions";
import {BOOKS, TEXT_NAMES} from './../../data/constants';

import Intro from './Intro/Intro';
import Book from './Book/Book';
import Pubs from './Pubs/Pubs';
import Read from './Read/Read';
import CopyrightNote from './../UI/CopyrightNote/CopyrightNote';

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
    padding: 7em 5% 2em 5%;
  }

  @media all and (min-width: ${props => props.theme.mediumScr}) {
    padding: 7em 20% 2em 20%;
  }

  @media all and (min-width: ${props => props.theme.largeScr}) {
    padding: 7em 22% 2em 22%;
  }

  @media all and (min-width: ${props => props.theme.extraLargeScr}) {
    padding: 7em 25% 2em 25%;
  }

  .hidden {
    display: none;
  }

`;

const SectionWrapper = styled.div`
  margin-bottom: 5em;
`;

export const About = (props) => {

    //part of page title to be displayed depending on the current language
    const fictionWriter = (props.lang === 'en') ? 'fiction writer' : 'prozaik';

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

    //lets the Redux store know that the main page is currently displayed
    const setMainDisplayed = () => {
        props.setMainPage(true)
    };

    //lets the Redux store know that the Book page is currently not displayed
    const setBookNotDisplayed = () => {
        props.setBookPage(false);
    };

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${fictionWriter}`;

        //change theme to a random one
        updateTheme();

        //show Navbar
        showNavbar();

        //checks whether data storage notice should be visible and if so, turn is on
        checkDataNotice();

        //lets the Redux store know that the main page is currently displayed
        setMainDisplayed();

        //lets the Redux store know that the Book page is currently not displayed
        setBookNotDisplayed();
    });

    //do not show the content until the page is loaded
    return props.loaded ?
        (<Wrapper>
            <TopAnchor>
                <div id='top'></div>
            </TopAnchor>
            <SectionWrapper>
                <Intro/>
            </SectionWrapper>
            <SectionWrapper id='books'>
                {BOOKS.slice().reverse().map((book, k) => {
                    return (
                        book.displayOnMain && <SectionWrapper id={book.id} key={book.id}>
                            <Book book={BOOKS.indexOf(book)}/>
                        </SectionWrapper>
                    );
                })}
            </SectionWrapper>
            <SectionWrapper id='pubs'>
                <Pubs/>
            </SectionWrapper>
            <SectionWrapper id='read'>
                <Read/>
            </SectionWrapper>
            <CopyrightNote/>
        </Wrapper>) :
        <div></div>;
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
        setMainPage,
        setBookPage
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(About);