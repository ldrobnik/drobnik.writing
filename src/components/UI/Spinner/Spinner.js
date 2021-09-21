import React from 'react';
import {SpinnerWrapper,  SpinnerBackdrop} from '../../../styles/shared';
import logoImage from '../../../assets/images/logo.svg';

const Spinner = () => {

    return (
        <React.Fragment>
            <SpinnerWrapper>
                    <img
                        src={logoImage}
                        alt='loading spinner'
                    />
            </SpinnerWrapper>
            <SpinnerBackdrop/>
        </React.Fragment>
    );
};

export default Spinner;