import styled from 'styled-components';
import {POP_KEYFRAMES} from '../styled';

/* QuickLink.js */

export const QuickLinkWrapper = styled.div`
  text-align: center;
  margin: 1em 0;
`;

export const QuickLinkContentWrapper = styled.div`
  background-color: ${props => props.theme.background};
  font-weight: bold;
  padding: 0.8em;
  margin: 0 0.5em;
  cursor: pointer;
  display: block;
  position: relative;
  user-select: none;
  overflow: hidden;


  &:hover {
    animation: ${POP_KEYFRAMES} ${props => props.theme.popAnimation}
  }

  @media all and (min-width: ${props => props.theme.extraSmallScr}) {
    margin: 0 0.8em;;
  }

  @media all and (min-width: ${props => props.theme.smallScr}) {
    margin: 0 1em;
  }

  @media all and (min-width: ${props => props.theme.mediumScr}) {
    margin: 0 2em;
  }

  @media all and (min-width: ${props => props.theme.largeScr}) {
    margin: 0 20%;
  }

  @media all and (min-width: ${props => props.theme.extraLargeScr}) {
    margin: 0 25%;
  }

`;

export const QuickLinkTitle = styled.div`
  font-size: ${props => props.theme.subtitleSize};
`;

export const QuickLinkSubtitle = styled.div`
  font-size: ${props => props.theme.bodySize};
`;