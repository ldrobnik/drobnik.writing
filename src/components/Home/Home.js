import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import Intro from './About/Intro/Intro';
import Nocturine from './About/Nocturine/Nocturine';
import Bio from './About/Bio/Bio';
import Read from './About/Read/Read';
import { TEXTS } from '../../data/constants';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        }
`;

const StyledWrapper = styled.div`

`;

const text = 'moths';

const Home = (props) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledWrapper>
                <Layout>
                    <Intro />
                    <Nocturine />
                    <Bio />
                    <Read />
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

