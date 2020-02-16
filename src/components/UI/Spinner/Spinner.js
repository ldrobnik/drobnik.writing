import React, {useState} from 'react';
import styled from 'styled-components';

import logoImage from '../../../assets/images/logo.svg';
import {PULSATE_KEYFRAMES, AnimatedContent} from "../../../data/constants";

const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 90;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
  
  img {
    height: 110px;
  }
`;


const Backdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 80;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, ${props => props.theme.color1}, ${props => props.theme.color2});
`;

const Spinner = () => {

    //specifies spinner visibility
    const [spinnerVisible, setSpinnerVisible] = useState(false);

    //shows spinner
    const showSpinner = () => {
        setSpinnerVisible(true);
    };

    return (
        <React.Fragment>
            <SpinnerWrapper>
                <AnimatedContent
                    pose={spinnerVisible ? 'visible' : 'hidden'}>
                    <img
                        src={logoImage}
                        alt='loading spinner'
                        onLoad={showSpinner}
                    />
                </AnimatedContent>
            </SpinnerWrapper>
            <Backdrop/>
        </React.Fragment>
    );
};

export default Spinner;