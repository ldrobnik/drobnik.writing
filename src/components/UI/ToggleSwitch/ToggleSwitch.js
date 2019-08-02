import React from 'react';
import Switch from "react-switch";


const ToggleSwitch = (props) => {

    return (

            <Switch
                checked={props.checked}
                onChange={props.onChange}
                offColor='#555'
                onColor='#333'
                onHandleColor='#0f0f0f'
                offHandleColor='#0f0f0f'
                uncheckedIcon={false}
                checkedIcon={false}
                height={20}
                width={40}
                activeBoxShadow={'0 0 2px 3px #bbb'}
            />

    );
};

export default ToggleSwitch;