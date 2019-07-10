import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { TEXTS } from '../../../data/constants';

const StyledWrapper = styled.div`

`;

const text = 'moths';

const Text = (props) => {

    return (
        <StyledWrapper>
            <h1>{TEXTS[props.lang][text].title}</h1>
            <h3>{TEXTS[props.lang][text].subtitle}</h3>
            {TEXTS[props.lang][text].content}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Text);