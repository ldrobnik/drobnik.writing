import React, {useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {connect} from 'react-redux';

import QuickLinks from '../QuickLinks/QuickLinks';
import Layout from '../Layout/Layout';
import About from './About/About';
import Text from './Text/Text';
import DataNotice from '../UI/DataNotice/DataNotice';
import {PULSATE_KEYFRAMES} from "../../data/constants";
import * as actionTypes from "../../store/actions";

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
    const checkLocalSTorage = () => {
        //check if data storage notice has been agreed to and if so, update Redux state accordingly
        const noticeAccepted = localStorage.getItem('dataNoticeAccepted');
        console.log(noticeAccepted);
        if (noticeAccepted) {
            //store info that the notice has been accepted in Redux store
            props.onAcceptanceChange(true);

            //stop displaying the notice
            props.onVisibilityChange(false);
        }
    };

    //Scrolls to top initially and if the URL path changes
    useEffect(() => {

            //check localStorage and update Redux state accordingly
            checkLocalSTorage();

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
                <DataNotice />
            </Layout>
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
        })
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

