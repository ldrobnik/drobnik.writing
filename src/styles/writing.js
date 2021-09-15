import styled from 'styled-components';
import {PULSATE_KEYFRAMES} from './shared';

/* Writing.js */

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

export const MainPageWritingBio = styled.div`
  margin-top: 1em;
  padding: 0 3em;
  font-size: ${props => props.theme.captionSize};
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
    padding: 0;
  }
`;

export const WritingSeparator = styled.div`
  margin: 3em auto;
  height: 0.6em;
  width: 6em;
`;

export const WritingBioWrapper = styled.div`
  line-height: 1.4;
  padding: 0 3em;
  text-align: justify;
  
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
