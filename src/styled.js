/* STYLED-COMPONENTS */
import styled, {createGlobalStyle} from 'styled-components';

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

