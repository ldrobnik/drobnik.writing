import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { WEBSITE_TEXT } from '../../../../data/constants';


const StyledWrapper = styled.div`

`;

const Nocturine = (props) => {

    return (
        <StyledWrapper>
            <h1>{WEBSITE_TEXT.nocturine.title[props.lang]}</h1>
            {WEBSITE_TEXT.nocturine.body[props.lang]}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Nocturine);