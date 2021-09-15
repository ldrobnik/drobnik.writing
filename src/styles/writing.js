import styled from 'styled-components';
import {PULSATE_KEYFRAMES} from './shared';

/* Writing.js */

export const WritingWrapper = styled.div`
  overflow: hidden;
  padding: 7em 1em 2em 1em;

  .centered {
    text-align: center;
  }

  @media all and (min-width: ${props => props.theme.extraSmallScr}) {
    padding: 7em 3em 2em 3em;
  }

  @media all and (min-width: ${props => props.theme.smallScr}) {
    padding: 7em 10% 2em 10%;
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
`;

export const WritingTopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

export const WritingTitle = styled.h1`
  font-size: ${props => props.theme.smallTitleSize};
  margin: 0 0 1em 0;
  text-align: center;

  @media all and (max-width: ${props => props.theme.smallScr}) {
    font-size: 8vw;
  }
`;

export const WritingBioWrapper = styled.div`
  line-height: 1.4;
  padding: 0 6em;
  text-align: justify;
  font-size: ${props => props.theme.captionSize};
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
    padding: 0;
  }

  a {
    text-decoration: underline;
    font-weight: bold;

    @media all and (min-width: ${props => props.theme.smallScr}) {
      &:hover {
        animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
      }
    }
  }
`;

export const WritingSectionHeading = styled.h2`
  font-size: ${props => props.theme.subtitleSize};
  font-weight: bold;
  font-style: italic;
  margin: 2em 0 1em 0;
  color: ${props => props.theme.darkColor};
  text-align: center;

  @media all and (max-width: ${props => props.theme.extraSmallScr}) {
    font-size: 4vw;
  }
`;