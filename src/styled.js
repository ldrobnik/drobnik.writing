/* STYLED-COMPONENTS */
import {createGlobalStyle} from 'styled-components';

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
