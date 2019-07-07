import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

const Layout = (props) => {

    return (
        <StyledWrapper>
            <div>Toolbar</div>
            <main>
                {props.children}
            </main>
        </StyledWrapper>
    );
};

export default Layout;