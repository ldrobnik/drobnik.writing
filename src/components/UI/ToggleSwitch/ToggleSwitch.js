import React from 'react';
import {ToggleWrapper} from '../../../styled';
import Switch from 'react-switch';

const ToggleSwitch = props => {

    return (
        <ToggleWrapper>
            <Switch
                checked={props.checked}
                onChange={props.onChange}
                offColor='#888'
                onColor='#555'
                onHandleColor='#333'
                offHandleColor='#333'
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
                activeBoxShadow={'0 0 2px 3px #bbb'}
            />
        </ToggleWrapper>
    );
};

export default ToggleSwitch;