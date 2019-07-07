import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Layout from '../Layout/Layout';

/* STYLES */

// Global style
const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        }
`;



const home = props => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Layout>
                Content
            </Layout>
        </React.Fragment>
    );
};

export default home;

