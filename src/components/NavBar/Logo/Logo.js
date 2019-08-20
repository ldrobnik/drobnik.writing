import React from 'react';
import styled from 'styled-components';

import websiteLogo from '../../../assets/images/logo.svg';

/* STYLED COMPONENTS*/
const WebsiteLogo = styled.div`
  height: 2.8em;
  padding: 0.3em;
    img {
      height: 100%;
    }
`;

const Logo = () => {
    return (
        <WebsiteLogo>
            <img src={websiteLogo} alt="Home"/>
        </WebsiteLogo>
    );
};

export default Logo;