import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Intro from "./Intro/Intro";
import Nocturine from "./Nocturine/Nocturine";
import Bio from "./Bio/Bio";
import Read from "./Read/Read";
import {TEXTS} from "../../../data/constants";


const StyledWrapper = styled.div`

`;

const About = (props) => {

    return (
        <StyledWrapper>
            <Intro />
            <Nocturine />
            <Bio />
            <Read />
            <h1>{TEXTS[props.lang][text].title}</h1>
            <h3>{TEXTS[props.lang][text].subtitle}</h3>
            {TEXTS[props.lang][text].content}
        </StyledWrapper>
    );
};

export default About;