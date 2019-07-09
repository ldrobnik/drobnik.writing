import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import { TEXTS } from '../../data/constants';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        }
`;

const StyledWrapper = styled.div`

`;

const text = 'cetacean';

const Home = (props) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledWrapper>
                <Layout>
                    <h1>{TEXTS[props.lang][text].title}</h1>
                    <h3>{TEXTS[props.lang][text].subtitle}</h3>
                    {TEXTS[props.lang][text].content}
                </Layout>
            </StyledWrapper>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Home);

