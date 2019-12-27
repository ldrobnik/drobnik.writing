import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {createGlobalStyle} from 'styled-components';

import * as actionTypes from "../../store/actions";

import Layout from '../Layout/Layout';
import About from '../About/About';
import Text from '../Text/Text';
import QuickLinks from '../QuickLinks/QuickLinks';
import DataNotice from '../UI/DataNotice/DataNotice';
import Spinner from '../UI/Spinner/Spinner';

/* STYLED COMPONENTS */
const GlobalStyle = createGlobalStyle`
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

    //sets page loading state as loaded and hides spinner
    const hideSpinner = () => {

        //set Redux page loaded state to true
        props.onPageLoadedChange(true);
    };

    //Scrolls to top initially and if the URL path changes
    useEffect(() => {
            window.scrollTo(0, 0);
        },
        [props.location.pathname]
    );

    useEffect(() => {
            //check localStorage and update Redux state accordingly
            checkLocalStorage();

            //set page as loaded and hide spinner after a while
            setTimeout(hideSpinner,800);
        }
    );

    //if the page is loaded, do not show the spinner
    const spinner = props.loaded ? <div></div> : <Spinner />;

    return (
        <React.Fragment>
            <GlobalStyle />
            <Layout>
                <Switch>
                    <Route path="/" exact component={About} key="home"/>
                    <Route path="/texts/" exact component={Text} key="texts"/>
                    <Route path="/texts/:id" exact component={Text} key="text"/>
                    <Route path="/links/" exact component={QuickLinks} key="links"/>
                    <Route render={() => (<Redirect to="/"/>)} key="default"/>
                </Switch>
                <DataNotice/>
                {spinner}
            </Layout>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        loaded: state.pageLoaded
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
        }),
        onPageLoadedChange: (newState) => dispatch({
        type: actionTypes.SET_PAGE_LOADED,
        pageLoaded: newState
    })
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

