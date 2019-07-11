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

