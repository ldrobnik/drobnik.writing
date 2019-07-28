import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';


import Intro from './Intro/Intro';
import Nocturine from './Nocturine/Nocturine';
import Pubs from './Pubs/Pubs';
import Read from './Read/Read';
import * as actionTypes from "../../../store/actions";



const StyledWrapper = styled.div`

`;

const About = (props) => {

    //part of page title to be displayed depending on the current language
    const fictionWriter = (props.lang === 'en') ? 'fiction writer' : 'prozaik';


    //theme to be used - based on the current text or black-and-white if the black-and-white mode is on
    const themeToUse = props.bwMode ? 'blackAndWhite' : 'default';

    //updates current theme
    const updateTheme = () => {
        props.onThemeChange(themeToUse);
    };

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${fictionWriter}`;

        //Scroll to top
        // window.scrollTo(0, 0);

        //change theme to a random one
        updateTheme();
    });

    // //Changes the displayed path to '/' in cases non-existent path is entered
    // useEffect(() => {
    //     props.history.push('/');
    // });

    return (
        <StyledWrapper>
            <section id='intro'>
                <Intro />
            </section>
            <section id='nocturine'>
                <Nocturine/>
            </section>
            <section id='pubs'>
                <Pubs/>
            </section>
            <section id='read'>
                <Read />
            </section>
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onThemeChange: (newTheme) => dispatch({type: actionTypes.SET_THEME, theme: newTheme})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);