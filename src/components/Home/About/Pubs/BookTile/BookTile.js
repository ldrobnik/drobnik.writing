import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`

`;

const BookTile = (props) => {

    return (
        <StyledWrapper>
            {props.title}
        </StyledWrapper>
    );
};

export default BookTile;