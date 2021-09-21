import React, {useState} from 'react';
import {SmallSpinnerWrapper} from '../../../styles/shared';
import {AnimatedContent} from '../../../animations/shared';
import logoImage from '../../../assets/images/logo.svg';

const SmallSpinner = () => {

    //specifies spinner visibility
    const [spinnerVisible, setSpinnerVisible] = useState(false);

    //shows spinner
    const showSpinner = () => {
        setSpinnerVisible(true);
    };

    return (
            <SmallSpinnerWrapper>
                <AnimatedContent
                    pose={spinnerVisible ? 'visible' : 'hidden'}>
                    <img
                        src={logoImage}
                        alt='loading spinner'
                        onLoad={showSpinner}
                    />
                </AnimatedContent>
            </SmallSpinnerWrapper>
    );
};

export default SmallSpinner;