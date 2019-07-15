import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import { WEBSITE_TEXT } from '../../../../data/constants';

const StyledWrapper = styled.div`

`;

const Read = (props) => {

    return (
        <StyledWrapper>
            <h1>{WEBSITE_TEXT.read.title[props.lang]}</h1>
            <p>{WEBSITE_TEXT.read.introduction[props.lang]}</p>
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

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Read);