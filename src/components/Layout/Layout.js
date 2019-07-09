import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import NavBar from '../NavBar/NavBar';

const StyledWrapper = styled.div`

`;

const Layout = (props) => {

    return (
        <StyledWrapper>
            <NavBar />
            <main>
                {props.children}
            </main>
        </StyledWrapper>
    );
};

export default Layout;