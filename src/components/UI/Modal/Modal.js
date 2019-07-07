import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

const Modal = (props) => {

    return (
        <StyledWrapper>
            {props.children}
        </StyledWrapper>
    );
};

export default Modal;