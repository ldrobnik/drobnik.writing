import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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

        //if unknown id, display 'nocturine'
        return 'nocturine';
    };

    const textName = checkTextID(props.match.params.id);

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${TEXTS[props.lang][textName].title}`;

        //Scroll to top
        window.scrollTo(0, 0);
    });

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