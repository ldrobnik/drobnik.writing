import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import * as actionTypes from '../../store/actions';

const StyledWrapper = styled.div`

`;


const NavBar = withRouter((props) => {
const langButton = (props.lang === 'en') ? 'PL' : 'EN';

    //changes current language
    const changeLanguage = () => {
        if (props.lang === 'en') {
            props.onLanguageChange('pl');
        } else {
            props.onLanguageChange('en');
        }
    };

    //navigation links rendered differently for different routes
    const navLinks = (props.location.pathname === '/') ?
    <React.Fragment>
        <AnchorLink href='#nocturine'>Nocturine</AnchorLink>&nbsp;
        <AnchorLink href='#pubs'>Publications</AnchorLink>&nbsp;
        <Link to='/texts/nocturine'>Texts</Link>
    </React.Fragment> :
    <React.Fragment>
        <Link to='/#nocturine'>Nocturine</Link>&nbsp;
        <Link to ='/#pubs'>Publications</Link>&nbsp;
        Texts
    </React.Fragment> ;

    return (
        <StyledWrapper>
            <Link to='/'>Home</Link>&nbsp;
            {navLinks}
            <div onClick={changeLanguage}>{langButton}</div>
        </StyledWrapper>
    );
});

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