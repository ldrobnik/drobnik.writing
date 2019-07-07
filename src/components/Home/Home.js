import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Layout from '../Layout/Layout';

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
                    Content
                </Layout>
            </StyledWrapper>
        </React.Fragment>
    );
};

export default Home;

