import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`

`;

const Quote = (props) => {

    return (
        <Wrapper>
            {props.quote}
            {props.source}
        </Wrapper>
    );
};

export default Quote;