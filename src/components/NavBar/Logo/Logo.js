import React from 'react';
import styled from 'styled-components';

import websiteLogo from '../../../assets/logo.png';

const WebsiteLogo = styled.div`
  padding: 2em;
  height: 3em;
    img {
      height: 100%;
    }
`;

const Logo = (props) => {

    return (
        <WebsiteLogo>
            <img src={websiteLogo} alt="Home"/>
        </WebsiteLogo>
    );
};

export default Logo;