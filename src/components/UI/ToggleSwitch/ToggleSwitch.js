import React from 'react';
import styled from 'styled-components';
import Switch from "react-switch";

const Wrapper = styled.div`
  padding: 0.1em;
  opacity: ${props => props.theme.translucent};
`;

const ToggleSwitch = (props) => {

    return (
        <Wrapper>
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
        </Wrapper>
    );
};

export default ToggleSwitch;