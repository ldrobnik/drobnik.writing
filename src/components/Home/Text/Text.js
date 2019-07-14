import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import * as actionTypes from '../../../store/actions';
import { TEXTS, TEXT_NAMES } from '../../../data/constants';

const TextBody = styled.div`
    font-family: ${props => props.theme.serif};
    font-size: 1.3em;
    line-height: 1.3em;
    
    @media all and (min-width: ${props => props.theme.extraSmallScr}) {
      padding: 2em 3em;
    }
    
    @media all and (min-width: ${props => props.theme.smallScr}) {
      padding: 2em 5%;
    }
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding: 2em 20%;
    }
    
    @media all and (min-width: ${props => props.theme.largeScr}) {
      padding: 2em 25%;
    }
    
    @media all and (min-width: ${props => props.theme.extraLargeScr}) {
      padding: 2em 32%;
    }
    
    
    padding: 2em 1em;
`;


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

    //updates current theme
    const updateTheme = () => {
        props.onThemeChange(TEXTS[props.lang][textName].theme);
    };

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${TEXTS[props.lang][textName].title}`;

        //Scroll to top
        window.scrollTo(0, 0);

        //update the theme depending on the text displayed
        updateTheme();
    });

    return (
        <React.Fragment>
            <h1>{TEXTS[props.lang][textName].title}</h1>
            <h3>{TEXTS[props.lang][textName].subtitle}</h3>
            <TextBody>
                {TEXTS[props.lang][textName].content}
            </TextBody>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onThemeChange: (newTheme) => dispatch({type: actionTypes.SET_THEME, theme: newTheme})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);