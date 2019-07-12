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
        darkColor: '#353535',
        background: 'rgba(53,53,53,0.25)',

        //fonts
        sansSerif: `'Maven Pro', sans-serif`,
        serif: `'Roboto Slab', serif`,

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
