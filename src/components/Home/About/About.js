import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Intro from './Intro/Intro';
import Nocturine from './Nocturine/Nocturine';
import Pubs from './Pubs/Pubs';
import Read from './Read/Read';



const StyledWrapper = styled.div`

`;

const About = (props) => {

    // //Changes the displayed path to '/' in cases non-existent path is entered
    // useEffect(() => {
    //     props.history.push('/');
    // });

    return (
        <StyledWrapper>
            <Intro />
            <Nocturine />
            <Pubs />
            <Read />

        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(About);