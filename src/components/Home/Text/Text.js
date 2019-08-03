import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import * as actionTypes from '../../../store/actions';
import {TEXTS, TEXT_NAMES, WEBSITE_TEXT} from '../../../data/constants';
import BackdropImage from '../../../assets/backdrop.png';

import DescriptionPanel from './DescriptionPanel/DescriptionPanel';


const TopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

const Wrapper = styled.div`

    @media all and (min-width: ${props => props.theme.extraSmallScr}) {
      padding: 7em 3em 2em 3em;
    }
    
    @media all and (min-width: ${props => props.theme.smallScr}) {
      padding: 7em 5% 2em 5%;
    }
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding: 7em 20% 2em 20%;
    }
    
    @media all and (min-width: ${props => props.theme.largeScr}) {
      padding: 7em 25% 2em 25%;
    }
    
    @media all and (min-width: ${props => props.theme.extraLargeScr}) {
      padding: 7em 32% 2em 32%;
    }
    
    padding: 7em 1em 2em 1em;
    
    .hidden {
      visibility: hidden;
    }
    
    .visible {
      visibility: visible;
    }
`;

const Header = styled.div`
    text-align: center;
    
    @media all and (min-width: ${props => props.theme.mediumScr}) {
      padding-right: 1em;
    }
`;

const TextTitle = styled.div`
    font-size: ${props => props.theme.titleSize};
    font-weight: bold;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 15vw;
    }
`;

const TextSubtitle = styled.div`
    font-size: ${props => props.theme.subtitleSize};
    font-weight: bold;
    font-style: italic;
    
    @media all and (max-width: ${props => props.theme.smallScr}) {
      font-size: 8vw;
    }
    
`;

const Capital = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 12em;
  text-transform: uppercase;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-20%, 70%);
  filter: blur( ${props => props.theme.lightBlur});
`;


const TextBody = styled.div`
    font-family: ${props => props.theme.serif};
    font-size: ${props => props.theme.bodySize};
    line-height: 1.4em;
    position: relative;
`;

const Credits = styled.p`
  font-size: ${props => props.theme.captionSize};
  font-family: ${props => props.theme.serif};
`;

const BackdropImg = styled.img`
  position: absolute;
  z-index: 0;
  filter: blur( ${props => props.theme.heavyBlur});
  right: 0;
  bottom: 0;
  transform: translate(7vw, 10em) rotate(16deg) scale(0.3);
  opacity: ${props => props.theme.transparent};
`;

const UpNext = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.theme.bodySize}
  user-select: none;
  margin: 1em 0;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: ${props => props.theme.captionSize}
  user-select: none;
  margin: 1em 0;
  
  div {
    padding: 0 0.3em;
  }
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

    //constant holding the name of the text to be displayed
    const textName = checkTextID(props.match.params.id);

    const textIndex = TEXT_NAMES.indexOf(textName);

    //The next text to be displayed;
    const nextTextId = (textIndex < TEXT_NAMES.length - 1) ? textIndex + 1 : 0;


    //The next text name
    const nextTextName = TEXT_NAMES[nextTextId];

    //The link to the next text
    const nextTextLink = <Link
        to={'/texts/' + nextTextName}>{WEBSITE_TEXT.text.nextText[props.lang]}<i>{TEXTS[props.lang][nextTextName].title}</i></Link>

    //The Back to Top link
    const top = <AnchorLink href='#top'>{WEBSITE_TEXT.text.top[props.lang]}</AnchorLink>;

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

    //class applied to the component content, depending on the loading status - the content is hidden when loading is ongoing
    const contentClass = (props.isLoading) ? 'hidden' : 'visible';

    return (
        <Wrapper>
            <div className={contentClass}>
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
                    <Capital>
                        {TEXTS[props.lang][textName].firstLetter}
                    </Capital>
                    {TEXTS[props.lang][textName].content}
                    <BackdropImg
                        src={BackdropImage}
                        alt='Backdrop image'
                    />
                </TextBody>
                <Credits>
                    <i>{TEXTS[props.lang][textName].credits}</i>
                </Credits>
                <DescriptionPanel
                    description={TEXTS[props.lang][textName].description}
                    title={TEXTS[props.lang][textName].title}
                />
                <UpNext>
                    {nextTextLink}
                </UpNext>
                <Links>
                    <div>{top}</div>
                    <div>{home}</div>
                </Links>
            </div>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        isLoading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onThemeChange: (newTheme) => dispatch({type: actionTypes.SET_THEME, theme: newTheme}),
        onTextChange: (newText) => dispatch({type: actionTypes.SET_CURRENT_TEXT, currentText: newText})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Text);