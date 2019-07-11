import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import * as actionTypes from '../../store/actions';

const StyledWrapper = styled.div`

`;


const NavBar = (props) => {
const langButton = (props.lang === 'en') ? 'PL' : 'EN';

//changes current language
    const changeLanguage = () => {
        if (props.lang === 'en') {
            props.onLanguageChange('pl');
        } else {
            props.onLanguageChange('en');
        }
    };


    return (
        <StyledWrapper>
            <Link to='/'>Home</Link>&nbsp;
            <AnchorLink href='#nocturine'>Nocturine</AnchorLink>&nbsp;
            <AnchorLink href='#pubs'>Publications</AnchorLink>&nbsp;
            <Link to='/texts/nocturine'>Texts</Link>
            <div onClick={changeLanguage}>{langButton}</div>
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLanguageChange: (newLang) => dispatch({type: actionTypes.SET_LANGUAGE, language: newLang})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);