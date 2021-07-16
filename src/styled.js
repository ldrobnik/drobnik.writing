/* STYLED-COMPONENTS */
import styled, {createGlobalStyle} from 'styled-components';
import {POP_KEYFRAMES, PULSATE_KEYFRAMES} from './data/constants';

/* General */

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        background: linear-gradient(145deg, ${props => props.theme.color1}, ${props => props.theme.color2});
        min-height: 100vh;
        }
        
    a {
        text-decoration: none;
        color: ${props => props.theme.darkColor};

    }
     
     ::selection {
        color: ${props => props.theme.color1};
        background-color: ${props => props.theme.darkColor};
     }
`;

/* About.js */

export const AboutTopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

export const AboutWrapper = styled.div`
  overflow: hidden;
  padding: 7em 1em 2em 1em;

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
    padding: 7em 22% 2em 22%;
  }

  @media all and (min-width: ${props => props.theme.extraLargeScr}) {
    padding: 7em 25% 2em 25%;
  }

  .hidden {
    display: none;
  }

`;

export const AboutSectionWrapper = styled.div`
  margin-bottom: 5em;
`;

/* Book.js */

export const BookBody = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  margin-top: 2em;
  margin-bottom: 2.5em;
  
     @media all and (min-width: ${props => props.theme.smallScr}) {
             text-align: justify;
        }  
   
`;

export const BookSlogan = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.sansSerif};
  line-height: 1.4em;
  text-align: center;
  text-transform: uppercase;
  margin: 1.5em 0 2em 0;
  
      a {
       @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }  
    }
`;

/* Intro.js */

export const IntroBody = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  
   @media all and (min-width: ${props => props.theme.smallScr}) {
             text-align: justify;
        }  
           
    a {
      font-family: ${props => props.theme.sansSerif};
      
      @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }  
        
    }
    
    .centered {
      text-align: center;
    }
`;

/* Pubs.js */

export const PubsWrapper = styled.div`
  text-align: center;
`;

export const PubsMessage = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;
  margin: 2em 0 0.5em 0;
`;

export const PubsSwitchPanel = styled.div`
  display: flex;
  justify-content: center;
  align-content: space-evenly;
  font-size: ${props => props.theme.bodySize};
  font-weight: bold;
  margin-bottom: 2em;
`;

export const PubsSwitchWrapper = styled.div`
  display: flex;
  margin: 0.5em;
`;

export const PubsLabel = styled.span`
  padding: 0.1em;
`;

export const PubsSubsectionHeading = styled.h1`
  font-size: ${props => props.theme.subtitleSize};
  //margin-top: 1em;
  text-transform: uppercase;
`;

export const PubsSeparator = styled.div`
  margin: 2em auto 0 auto;
  height: 0.6em;
  width: 6em;
  background-color: ${props => props.theme.darkColor};
`;

/* PubList.js */

export const PubTileContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  cursor: pointer;
`;

/* PubTitle.js */

export const PublicationTile = styled.div`
    background-color: ${props => props.theme.background};
    position: relative;
    height: 12em;
    width: 15em;
    padding: 0.2em 0.5em;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
`;

export const PubBookTile = styled.div`
    background-color: ${props => props.theme.background};
    position: relative;
    height: 17em;
    width: 19em;
    padding: 0.2em 0.5em;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    overflow: hidden;
`;

export const PubTileWrapper = styled.div`
  display: table;
  margin: 0.8em 0;
  
  &:hover {
     animation: ${POP_KEYFRAMES} ${props => props.theme.popAnimation};
  }
`;

export const PubYear = styled.div`
  font-size: ${props => props.theme.captionSize};
  margin-bottom: 0.5em;
`;

export const PubTitle = styled.div`
  font-size: ${props => props.theme.bodySize};
  text-transform: uppercase;
  font-weight: bold;
`;

export const PubSeparator = styled.div`
  margin: 0.5em auto;
  height: 0.5em;
  width: 8em;
  background-color: ${props => props.theme.darkColor};
`;

export const PubIssue = styled.div`
  font-size: ${props => props.theme.smallCaptionSize};
  margin-bottom: 0.5em;
`;

export const PubDescription = styled.div`
  font-size: ${props => props.theme.smallCaptionSize};
`;

/* BookCover.js */

export const BookCoverWrapper = styled.div`
  text-align: center;
  padding: 0.5em;
  position: relative; 
`;

export const BookCoverPhoto = styled.div`
  height: 5em;
  opacity: ${props => props.theme.slightlyTranslucent};
  z-index: 60;
  
  img {
      height: 100%;
  }
`;

/* QuoteList.js */

export const QuoteListWrapper = styled.div`
  text-align: center;
`;


/* Read.js */

export const ReadWrapper = styled.div`
  text-align: center;
`;

export const ReadMessage = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.bodySize};
  margin: 3em 0;
`;
