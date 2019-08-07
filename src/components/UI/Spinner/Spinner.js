import React, {useState} from 'react';
import styled from 'styled-components';

import logoImage from '../../../assets/images/logo.png';
import {PULSATE_KEYFRAMES, AnimatedContent} from "../../../data/constants";

const Wrapper = styled.div`
  positon: relative;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
`;

const Spinner = () => {

    //specifies spinner visibility
    const [spinnerVisible, setSpinnerVisible] = useState(false);

    //shows spinner
    const showSpinner = () => {
        setSpinnerVisible(true);
    };

    return (
        <Wrapper>
            <SpinnerWrapper>
                <AnimatedContent
                    pose={spinnerVisible ? 'visible' : 'hidden'}>
                    <img
                        src={logoImage}
                        onLoad={showSpinner}
                    />
                </AnimatedContent>
            </SpinnerWrapper>
        </Wrapper>
    );
};

export default Spinner;