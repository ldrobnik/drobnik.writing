import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import { connect } from 'react-redux';

import Layout from '../Layout/Layout';
import About from './About/About';
import Text from './Text/Text';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        background-image: linear-gradient(141deg, ${props => props.theme.color1}, ${props => props.theme.color2});
        }
`;

const StyledWrapper = styled.div`

`;


const Home = (props) => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <StyledWrapper>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={About} />
                        <Route path="/texts/:id" component={Text} />
                        <Route component={About} />
                    </Switch>
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

