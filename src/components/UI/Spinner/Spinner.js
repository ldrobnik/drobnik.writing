import React, {useState, useEffect} from 'react';
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

    //turns the spinner visibility on
    useEffect(() => {
        setSpinnerVisible(true);
    });

    return (
        <Wrapper>
            <SpinnerWrapper>
                <AnimatedContent
                    pose={spinnerVisible ? 'visible' : 'hidden'}>
                    <img src={logoImage}/>
                </AnimatedContent>
            </SpinnerWrapper>
        </Wrapper>
    );
};

export default Spinner;