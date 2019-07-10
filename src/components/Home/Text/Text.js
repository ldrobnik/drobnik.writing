import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { TEXTS, TEXT_NAMES } from '../../../data/constants';

const StyledWrapper = styled.div`

`;

const text = 'moths';

const Text = (props) => {

    //Checks if the id in the current url matches any text; if not, returns 'nocturine'
    const checkTextID = (name) => {

        for (let i = 0; i < TEXT_NAMES.length; i++) {
            if (TEXT_NAMES[i] === name) return name;
        }

        return 'nocturine';
    };

    const textName = checkTextID(props.match.params.id);

    return (
        <StyledWrapper>
            <h1>{TEXTS[props.lang][textName].title}</h1>
            <h3>{TEXTS[props.lang][textName].subtitle}</h3>
            {TEXTS[props.lang][textName].content}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Text);