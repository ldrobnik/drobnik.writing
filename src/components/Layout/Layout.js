import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

import NavBar from '../NavBar/NavBar';



/* POSE */
const TransitionContainer = posed.div({
    enter: {
        opacity: 1, filter: 'blur(0px)', y: 0
    },
    exit: {
        opacity: 0, filter: 'blur(20px)', y: 30
    },
});

const Layout = (props) => {

    return (
        <React.Fragment>
            <NavBar />

                <main>
                    {props.children}
                </main>

        </React.Fragment>
    );
};

export default Layout;