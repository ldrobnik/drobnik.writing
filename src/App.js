import React from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import ReactGA from 'react-ga';

import { THEME_COLORS } from "./data/constants";

import Home from './components/Home/Home';

//Google Analytics code
const ANALYTICS_KEY = process.env.REACT_APP_ANALYTICS_KEY; // Google analytics API key
ReactGA.initialize(ANALYTICS_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);


const App = (props) => {
    // Theme to be used in the project, two primary colors depending on redux state
    const theme = {
        //colours
        color1: THEME_COLORS[props.theme].color1,
        color2: THEME_COLORS[props.theme].color2,
        darkColor: '#0f0f0f',
        lightColor: '#bbbbbb',
        background: 'rgba(40,40,40,0.1)',

        //fonts
        sansSerif: `'Maven Pro', sans-serif`,
        serif: `'Roboto Slab', serif`,
        cursive: `'Molle', cursive`,

        //font sizes
        titleSize: '5em',
        subtitleSize: '2em',
        bodySize: '1.3em',
        captionSize: '1em',
        smallCaptionSize: '0.8em',

        //breakpoints
        extraSmallScr: '480px',
        smallScr: '736px',
        mediumScr: '980px',
        largeScr: '1280px',
        extraLargeScr: '1690px',

        //opacity
        slightlyTranslucent: '0.7',
        translucent: '0.5',
        transparent: '0.1',

        //animations
        pulsateAnimation: '0.8s ease-in-out infinite',
        blurAnimation: '6s ease-out alternate infinite',
        popAnimation: '0.5s ease-in-out 1',
        fadeInAnimation:'0.7s ease-in-out 1',

        //blur filter
        lightBlur: '3px',
        heavyBlur: '8px',

        //spacing
        navIconMargin: '0.1em',
        navIconPadding: '0.6em'
    };

    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
};

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};

export default connect(mapStateToProps)(App);
