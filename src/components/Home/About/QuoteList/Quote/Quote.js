import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin: 4em 0;
    position: relative;
`;

const QuoteContent = styled.div`
    font-family: ${props => props.theme.serif};
    font-size: ${props => props.theme.captionSize};

`;

const QuoteSource = styled.div`
    font-family: ${props => props.theme.sansSerif};
    font-size: ${props => props.theme.smallCaptionSize};
    margin-top: 1em;
    font-weight: bold;
        position: relative;
`;

const InvertedCommas = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 10em;
  text-transform: uppercase;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-70%, -20%);
  filter: blur( ${props => props.theme.lightBlur});
  user-select: none;
`;

const Quote = (props) => {

    return (
        <Wrapper>
            <QuoteContent>
                {props.quote}
            </QuoteContent>
            <QuoteSource>
                {props.source}
                <InvertedCommas>
                    “”
                </InvertedCommas>
            </QuoteSource>
        </Wrapper>
    );
};

export default Quote;