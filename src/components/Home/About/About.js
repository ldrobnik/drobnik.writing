import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';


import Intro from './Intro/Intro';
import Nocturine from './Nocturine/Nocturine';
import Pubs from './Pubs/Pubs';
import Read from './Read/Read';



const StyledWrapper = styled.div`

`;

const About = (props) => {

    const fictionWriter = (props.lang === 'en') ? 'fiction writer' : 'prozaik';
    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${fictionWriter}`;

        //Scroll to top
        window.scrollTo(0, 0);
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
                <Read id='read' />
            </section>
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(About);