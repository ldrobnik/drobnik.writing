import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

const StyledWrapper = styled.div`

`;

const NavBar = (props) => {

    return (
        <StyledWrapper>
            NavBar
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