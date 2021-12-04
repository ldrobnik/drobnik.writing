import styled from 'styled-components';
import {POP_KEYFRAMES, PULSATE_KEYFRAMES} from './shared';

/* Text.js */

export const TextTopAnchor = styled.div`
  position: absolute;
  top: 0;
`;

export const TextWrapper = styled.div`
  overflow: hidden;
  padding: 7em 1em 2em 1em;
  min-height: 110vh;

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

export const TextHeader = styled.div`
  text-align: center;

  @media all and (min-width: ${props => props.theme.mediumScr}) {
    padding-right: 1em;
  }
`;

export const TextTitle = styled.h1`
  font-size: ${props => props.theme.titleSize};
  font-weight: bold;
  margin: 0;

  @media all and (max-width: ${props => props.theme.smallScr}) {
    font-size: 15vw;
  }
`;

export const TextSubtitle = styled.div`
  font-size: ${props => props.theme.subtitleSize};
  font-weight: bold;
  font-style: italic;

  @media all and (max-width: ${props => props.theme.smallScr}) {
    font-size: 8vw;
  }
`;

export const TextBody = styled.div`
  font-family: ${props => props.theme.serif};
  font-size: ${props => props.theme.bodySize};
  line-height: 1.4;
  position: relative;
  margin-top: 2em;
`;

export const TextSeparator = styled.div`
  margin: 3em auto;
  height: 0.6em;
  width: 6em;
  background-color: ${props => props.theme.darkColor};
`;

/* Credits.js */

export const CreditWrapper = styled.div`
  font-size: ${props => props.theme.captionSize};
  font-family: ${props => props.theme.serif};
  margin: 2em 0 2.5em 0;
`;

/* DescriptionPanel.js */

export const Description = styled.div`
  background-color: ${props => props.theme.background};
  font-size: ${props => props.theme.bodySize};
  text-align: center;
  padding: 0.5em 1em;
  margin: 2.5em 0;

  a {
    font-weight: bold;

    @media all and (min-width: ${props => props.theme.smallScr}) {
      &:hover {
        animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
      }
    }
  }
`;

/* NextTextLink.js */

export const NextTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    animation: ${POP_KEYFRAMES} ${props => props.theme.popAnimation};
  }
`;

export const UpNext = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.theme.bodySize}
  user-select: none;
  margin: 1em 0;
`;

export const NextTextLine = styled.div`
  height: 0.5em;
  width: 6em;
  margin: 1em;
  background-color: ${props => props.theme.darkColor};
`;

