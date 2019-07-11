import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';


import * as actionTypes from '../../store/actions';
import {TEXTS, TEXT_NAMES} from '../../data/constants';

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
            <Link to='/' className={'textLink'}>Home</Link>&nbsp;
            <div onClick={changeLanguage}>{langButton}</div>
            {TEXT_NAMES.map((textName) => {
                return (
                    <p key={textName}>
                        <Link to={'/texts/' + textName}>{TEXTS[props.lang][textName].title}</Link>
                    </p>
                )
            })}
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