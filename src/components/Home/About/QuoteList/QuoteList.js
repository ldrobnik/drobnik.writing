import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {TEXT_NAMES, TEXTS, WEBSITE_TEXT} from "../../../../data/constants";
import Quote from './Quote/Quote';

/* STYLED COMPONENTS */
const Wrapper = styled.div`
  text-align: center;
`;

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 200,
        staggerChildren: 300
    }
});

const AnimatedQuote = posed.div({
    visible: {
        y: '0%',
        opacity: 1,
        transition: {
            duration: 2000
        }
    },
    hidden: {
        y: '-10%',
        opacity: 0,
        transition: {
            duration: 2000
        }
    }
});

const QuoteList = (props) => {

    return (
        <Wrapper>
            <AnimatedList
                pose={props.visible ? 'visible' : 'hidden'}>
                {WEBSITE_TEXT.nocturine.quotes[props.lang].map((text, k) => {
                    return (
                        <AnimatedQuote
                            pose={props.visible ? 'visible' : 'hidden'}>
                            <Quote
                                quote={text.quote}
                                source={text.source}
                                key={k}
                            />
                        </AnimatedQuote>
                    )
                })}
            </AnimatedList>
        </Wrapper>
    );
};

export default QuoteList;