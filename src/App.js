import React from 'react';
import {ThemeProvider} from 'styled-components';

import Home from './components/Home/Home';

// Theme to be used in the project
const theme = {
    //colours
    nocturine: '#a98086',
    nocturine2: '#ca8ca3',
    cunninghamella: '#566f0c',
    cunninghamella2: '#85a814',
    vostok: '#a67847',
    vostok2: '#c69f25',
    entropia: '#616a65',
    entropia2: '#228671',
    devonian: '#99aac6',
    devonian2: '#3fc6eb',
    obrovsky: '#b34a53',
    obrovsky2: '#e44f60',
    lightColor: '#e5e5e5',
    darkColor: '#1b1b1b',

    //fonts
    sansSerif: `'Maven Pro', sans-serif`,
    serif: `'Roboto Slab', serif`
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
