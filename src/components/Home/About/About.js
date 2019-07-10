import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Intro from './Intro/Intro';
import Nocturine from './Nocturine/Nocturine';
import Bio from './Bio/Bio';
import Read from './Read/Read';



const StyledWrapper = styled.div`

`;

const About = (props) => {

    //Changes the path to '/' in cases non-existent path is entered

    useEffect(() => {
        props.history.push('/');
    });

    return (
        <StyledWrapper>
            <Intro />
            <Nocturine />
            <Bio />
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