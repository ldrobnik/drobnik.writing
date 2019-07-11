import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

const PressTile = (props) => {

    return (
        <StyledWrapper>
            <a href={props.url} target="_blank" rel="noopener noreferrer">{props.title}</a>
        </StyledWrapper>
    );
};

export default PressTile;