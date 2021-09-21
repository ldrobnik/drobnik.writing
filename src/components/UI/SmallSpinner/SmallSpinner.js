import React from 'react';
import {SmallSpinnerWrapper} from '../../../styles/shared';
import logoImage from '../../../assets/images/logo.svg';

const SmallSpinner = () => {


    return (
            <SmallSpinnerWrapper>
                    <img
                        src={logoImage}
                        alt='loading spinner'
                    />
            </SmallSpinnerWrapper>
    );
};

export default SmallSpinner;