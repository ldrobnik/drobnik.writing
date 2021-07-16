import React, {useEffect} from 'react';
import {bindActionCreators} from "redux";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createGlobalStyle} from 'styled-components';
import {setDataNoticeVisible, setDataNoticeAccepted, setLanguage, setBWMode, setPageLoaded} from "../../actions";
import Layout from '../Layout/Layout';
import About from '../About/About';
import Text from '../Text/Text';
import QuickLinks from '../QuickLinks/QuickLinks';
import DataNotice from '../UI/DataNotice/DataNotice';
import Spinner from '../UI/Spinner/Spinner';
import {GlobalStyle} from '../../styled';

export const Home = (props) => {
    //checks if any data is stored in localStorage and updates Redux state accordingly
    const checkLocalStorage = () => {

        //check if data storage notice has been agreed to and if so, update Redux state accordingly
        const noticeAccepted = localStorage.getItem('dataNoticeAccepted');

        if (noticeAccepted) {
            //store info that the notice has been accepted in Redux store
            props.setDataNoticeAccepted(true);

            //stop displaying the notice
            props.setDataNoticeVisible(false);
        }

        //check if the language is stored in localStorate and if so, update Redux state accordingly
        const storedLanguage = localStorage.getItem('language');

        //if there is a language stored, used it on the website
        if (storedLanguage === 'en' || storedLanguage === 'pl') {
            props.setLanguage(storedLanguage);
        }

        //check if the language is stored in localStorate and if so, update Redux state accordingly
        const storedColorMode = localStorage.getItem('colorMode');

        //update the Redux state with value stored in localStorage if any
        if (storedColorMode === 'b&w') {
            props.setBWMode(true);
        } else {
            props.setBWMode(false);
        }
    };

    //sets page loading state as loaded and hides spinner
    const hideSpinner = () => {

        //set Redux page loaded state to true
        props.setPageLoaded(true);
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

    return (
        <React.Fragment>
            <GlobalStyle />
            <Layout>
                <Switch>
                    <Route path="/" exact component={About} key="home"/>
                    <Route path="/texts/" exact component={Text} key="texts"/>
                    <Route path="/texts/:id" exact component={Text} key="text"/>
                    <Route path="/nocturine/" exact component={() => {
                        window.location.href = "http://fathombooks.org/html/drobnik.html";
                        return null;
                    }}/>
                    {/*<Route path="/nocturine/" exact component={() => <BookPage book={0}/>} key="nocturine"/>*/}
                    <Route path="/vostok/" exact component={() => {
                        window.location.href = "https://www.vraeydamedia.ca/shop/x55ht1b0h70i3bwv9qismih2f6b5nk";
                        return null;
                    }}/>
                    {/*<Route path="/vostok/" exact component={() => <BookPage book={1}/>} key="vostok"/>*/}
                    <Route path="/links/" exact component={QuickLinks} key="links"/>
                    <Route render={() => (<Redirect to="/"/>)} key="default"/>
                </Switch>
                <DataNotice/>
                {!props.loaded && <Spinner />}
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
    return bindActionCreators({
        setDataNoticeVisible,
        setDataNoticeAccepted,
        setLanguage,
        setBWMode,
        setPageLoaded
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));

