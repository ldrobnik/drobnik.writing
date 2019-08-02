import React from 'react';
import {ThemeProvider} from 'styled-components';
import {connect} from 'react-redux';
import Home from './components/Home/Home';

import { THEME_COLORS } from "./data/constants";


const App = (props) => {
    // Theme to be used in the project, two primary colors depending on redux state
    const theme = {
        //colours
        color1: THEME_COLORS[props.theme].color1,
        color2: THEME_COLORS[props.theme].color2,
        darkColor: '#0f0f0f',
        background: 'rgba(40,40,40,0.25)',

        //fonts
        sansSerif: `'Maven Pro', sans-serif`,
        serif: `'Roboto Slab', serif`,
        cursive: `'Molle', cursive`,

        //font sizes
        titleSize: '5em',
        subtitleSize: '2em',
        bodySize: '1.3em',
        //breakpoints
        extraSmallScr: '480px',
        smallScr: '736px',
        mediumScr: '980px',
        largeScr: '1280px',
        extraLargeScr: '1690px',

        //opacity
        translucent: '0.7',
        transparent: '0.1',

        //animations
        pulsateAnimation: '0.8s ease-in-out infinite',
        scaleAnimation: '6s ease-out alternate infinite'
    };


    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

const mapStateToProps = state => {
    return {
        theme: state.theme
    };
};

export default connect(mapStateToProps)(App);
