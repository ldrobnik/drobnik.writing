import React, {useState, useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import {connect} from 'react-redux';

import QuickLinks from '../QuickLinks/QuickLinks';
import Layout from '../Layout/Layout';
import About from './About/About';
import Text from './Text/Text';
import {PULSATE_KEYFRAMES} from "../../data/constants";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.sansSerif};
        color: ${props => props.theme.darkColor};
        background-image: linear-gradient(145deg, ${props => props.theme.color1}, ${props => props.theme.color2});
        min-height: 100vh;
        }
        
     a {
        text-decoration: none;
        color: ${props => props.theme.darkColor};
        
        
        @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }
            
        }
     
     
     ::selection {
        color: ${props => props.theme.color1};
        background-color: ${props => props.theme.darkColor};
     }
`;


const Home = (props) => {

    //Scrolls to top initially and if the URL path changes
    useEffect(() => {

            window.scrollTo(0, 0);
        },
        [props.location.pathname]
    );

    return (
        <React.Fragment>
            <GlobalStyle/>
            <Layout>
                <Switch>
                    <Route path="/links/" exact component={QuickLinks}/>
                    <Route path="/" exact component={About}/>
                    <Route path="/texts/" exact component={Text}/>
                    <Route path="/texts/:id" exact component={Text}/>
                    <Route component={About}/>
                </Switch>
            </Layout>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default withRouter(connect(mapStateToProps)(Home));

