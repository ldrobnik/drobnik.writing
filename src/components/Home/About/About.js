import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';


import Intro from './Intro/Intro';
import Nocturine from './Nocturine/Nocturine';
import Pubs from './Pubs/Pubs';
import Read from './Read/Read';
import * as actionTypes from "../../../store/actions";
import {TEXT_NAMES} from '../../../data/constants';



const StyledWrapper = styled.div`

`;

const TopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

const About = (props) => {


    //part of page title to be displayed depending on the current language
    const fictionWriter = (props.lang === 'en') ? 'fiction writer' : 'prozaik';





    //updates current theme
    const updateTheme = () => {
        //randomly selected theme
        const randomTheme = TEXT_NAMES[Math.floor(Math.random() * TEXT_NAMES.length)];

        //theme to be used - black-and-white if the black-and-white mode is on or the randomly selected theme
        const themeToUse = props.bwMode ? 'blackAndWhite' : randomTheme;
        props.onThemeChange(themeToUse);
    };

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${fictionWriter}`;

        //change theme to a random one
        updateTheme();
    });

    return (
        <StyledWrapper>
            <TopAnchor>
                <div id='top'></div>
            </TopAnchor>
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