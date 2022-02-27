import styled from 'styled-components';
import {POP_KEYFRAMES, PULSATE_KEYFRAMES} from './shared';

/* BookDetails.js */

export const BookPageTopPanel = styled.div`
    display: flex;
  
  @media all and (max-width: ${props => props.theme.smallScr}) {
    display: block;
  }
`;


export const BookPageBody = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4;
  margin-top: 2em;
  margin-bottom: 2.5em;

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

`;

export const BookPageSlogan = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.sansSerif};
  line-height: 1.4;
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
