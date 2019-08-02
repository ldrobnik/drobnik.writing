import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {TEXT_NAMES, TEXTS, WEBSITE_TEXT} from "../../../../data/constants";
import Quote from './Quote/Quote';

const Wrapper = styled.div`
  text-align: center;
`;

const QuoteList = (props) => {

    return (
        <Wrapper>
            {WEBSITE_TEXT.nocturine.quotes[props.lang].map((text, k) => {
                return (
                    <Quote
                        quote={text.quote}
                        source={text.source}
                        key={k}
                    />
                )
            })}
        </Wrapper>
    );
};

export default QuoteList;