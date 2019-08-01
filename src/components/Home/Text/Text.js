import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

import * as actionTypes from '../../../store/actions';
import { TEXTS, TEXT_NAMES, WEBSITE_TEXT } from '../../../data/constants';


const TopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

const Wrapper = styled.div`
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

const Header = styled.div`
    text-align: center;
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding-right: 1em;
    }
`;

const TextTitle = styled.div`
    font-size: 5em;
    font-weight: bold;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 15vw;
    }
`;

const TextSubtitle = styled.div`
    font-size: 2em;
    font-weight: bold;
    font-style: italic;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 8vw;
    }
    
`;

const TextBody = styled.div`
    font-family: ${props => props.theme.serif};
    font-size: 1.3em;
    line-height: 1.4em;
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

    const textIndex = TEXT_NAMES.indexOf(textName);

    //The next text to be displayed;
    const nextTextId = (textIndex < TEXT_NAMES.length - 1) ? textIndex + 1 : 0;


    //The next text name
    const nextTextName = TEXT_NAMES[nextTextId];

    //The link to the next text
    const nextTextLink = <Link to={'/texts/' + nextTextName}>{WEBSITE_TEXT.text.nextText[props.lang]}{TEXTS[props.lang][nextTextName].title}</Link>

    //The Back to Top link
    const backToTop = <AnchorLink href='#top'>{WEBSITE_TEXT.text.backToTop[props.lang]}</AnchorLink>;

    //The Home link
    const home = <Link to={'/'}>{WEBSITE_TEXT.text.home[props.lang]}</Link>;

    //updates the currently displayed text
    const updateText = () => {
        props.onTextChange(textName);
    };

    //theme to be used - based on the current text or black-and-white if the black-and-white mode is on
    const themeToUse = props.bwMode ? 'blackAndWhite' : TEXTS[props.lang][textName].theme;

    //updates current theme
    const updateTheme = () => {
        props.onThemeChange(themeToUse);
    };

    useEffect(() => {
        //Update page title with the piece title
        document.title = `Łukasz Drobnik - ${TEXTS[props.lang][textName].title}`;

        //update the theme depending on the text displayed
        updateTheme();

        //update the currently displayed text
        updateText();
    });

    return (
        <Wrapper>
            <TopAnchor>
                <div id='top'></div>
            </TopAnchor>
            <Header>
                <TextTitle>
                    {TEXTS[props.lang][textName].title}
                </TextTitle>
                <TextSubtitle>
                    {TEXTS[props.lang][textName].subtitle}
                </TextSubtitle>
            </Header>
            <TextBody>
                {TEXTS[props.lang][textName].content}
                <p><i>{TEXTS[props.lang][textName].credits}</i></p>
                <p><i>{TEXTS[props.lang][textName].description}</i></p>
                <p>
                    <i>{nextTextLink}</i>&nbsp;|&nbsp;
                    <i>{backToTop}</i>&nbsp;|&nbsp;
                    <i>{home}</i>
                </p>
            </TextBody>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onThemeChange: (newTheme) => dispatch({type: actionTypes.SET_THEME, theme: newTheme}),
        onTextChange: (newText) => dispatch({type: actionTypes.SET_CURRENT_TEXT, currentText: newText})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);