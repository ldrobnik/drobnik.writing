import React, {useState} from 'react';
import {SpinnerWrapper, SpinnerBackdrop} from '../../../styled';
import {AnimatedContent} from '../../../animations/shared';
import logoImage from '../../../assets/images/logo.svg';

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
            <SpinnerBackdrop/>
        </React.Fragment>
    );
};

export default Spinner;