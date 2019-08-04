import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {connect} from 'react-redux';
import posed, {PoseGroup} from 'react-pose';

import QuickLinks from '../QuickLinks/QuickLinks';
import Layout from '../Layout/Layout';
import About from './About/About';
import Text from './Text/Text';
import DataNotice from '../UI/DataNotice/DataNotice';
import {PULSATE_KEYFRAMES} from "../../data/constants";
import * as actionTypes from "../../store/actions";


const RouteContainer = posed.div({
    enter: {
        opacity: 1, filter: 'blur(0px)',
    },
    exit: {
        opacity: 0, filter: 'blur(20px)'
    },
});

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

    //checks if any data is stored in localStorage and updates Redux state accordingly
    const checkLocalStorage = () => {
        //check if data storage notice has been agreed to and if so, update Redux state accordingly
        const noticeAccepted = localStorage.getItem('dataNoticeAccepted');

        if (noticeAccepted) {
            //store info that the notice has been accepted in Redux store
            props.onAcceptanceChange(true);

            //stop displaying the notice
            props.onVisibilityChange(false);

        }

        //check if the language is stored in localStorate and if so, update Redux state accordingly
        const storedLanguage = localStorage.getItem('language');

        //if there is a language stored, used it on the website
        if (storedLanguage === 'en' || storedLanguage === 'pl') {
            props.onLanguageChange(storedLanguage);
        }

        //check if the language is stored in localStorate and if so, update Redux state accordingly
        const storedColorMode = localStorage.getItem('colorMode');

        //update the Redux state with value stored in localStorage if any
        if (storedColorMode === 'b&w') {
            props.onBwModeChange(true);
        } else {
            props.onBwModeChange(false);
        }
    };

    //Scrolls to top initially and if the URL path changes
    useEffect(() => {

            //check localStorage and update Redux state accordingly
            checkLocalStorage();

            window.scrollTo(0, 0);
        },
        [props.location.pathname]
    );

    return (
        <React.Fragment>
            <GlobalStyle/>
            <Route
                render={({location}) => (
                    <Layout>
                        <Switch location={location}>
                            <PoseGroup>
                                <RouteContainer key={location.pathname}>
                                    <Route path="/" exact component={About} key="home"/>
                                    <Route path="/texts/" exact component={Text} key="texts"/>
                                    <Route path="/texts/:id" exact component={Text} key="text"/>
                                    <Route path="/links/" exact component={QuickLinks} key="links"/>
                                </RouteContainer>
                            </PoseGroup>
                        </Switch>
                        <DataNotice/>
                    </Layout>
                )}
            />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onVisibilityChange: (newState) => dispatch({
            type: actionTypes.SET_DATA_NOTICE_VISIBLE,
            dataNoticeVisible: newState
        }),
        onAcceptanceChange: (newState) => dispatch({
            type: actionTypes.SET_DATA_NOTICE_ACCEPTED,
            dataNoticeAccepted: newState
        }),
        onLanguageChange: (newLang) => dispatch({
            type: actionTypes.SET_LANGUAGE,
            language: newLang
        }),
        onBwModeChange: (newMode) => dispatch({
            type: actionTypes.SET_BW_MODE,
            blackAndWhite: newMode
        })
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

