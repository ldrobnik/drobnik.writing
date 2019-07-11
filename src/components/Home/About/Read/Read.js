import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const StyledWrapper = styled.div`

`;

const Read = (props) => {

    return (
        <StyledWrapper>
            <h2>Read some of my work</h2>
            <p><Link to='/texts/nocturine'>Nocturine</Link></p>
            <p><Link to='/texts/cetacean'>Cetacean</Link></p>
            <p><Link to='/texts/moths'>Moths</Link></p>
            <p><Link to='/texts/cellulose'>Cellulose</Link></p>
            <p><Link to='/texts/treasures'>Treasures</Link></p>
            <p><Link to='/texts/landmines'>Landmines</Link></p>
            <p><AnchorLink href='#intro'>Back to Top</AnchorLink></p>
        </StyledWrapper>
    );
};

export default Read;