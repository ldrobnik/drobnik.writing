import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Layout from '../Layout/Layout';
import {TEXTS} from '../../data/constants';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        }
`;

const StyledWrapper = styled.div`

`;


const Home = (props) => {
    return (
        <React.Fragment>
            <GlobalStyle/>
            <StyledWrapper>
                <Layout>
                    {TEXTS.en.cellulose.content}
                </Layout>
            </StyledWrapper>
        </React.Fragment>
    );
};

export default Home;

