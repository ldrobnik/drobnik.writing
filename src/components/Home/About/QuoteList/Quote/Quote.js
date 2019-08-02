import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 4em 0;
    position: relative;
`;

const QuoteContent = styled.p`
    font-family: ${props => props.theme.serif};
    font-size: ${props => props.theme.captionSize};
`;

const QuoteSource = styled.p`
    font-family: ${props => props.theme.sansSerif};
    font-size: ${props => props.theme.smallCaptionSize};
    margin-top: 1em;
    font-weight: bold;
`;

const Quote = (props) => {

    return (
        <Wrapper>
            <QuoteContent>
                {props.quote}
            </QuoteContent>
            <QuoteSource>
                {props.source}
            </QuoteSource>
        </Wrapper>
    );
};

export default Quote;