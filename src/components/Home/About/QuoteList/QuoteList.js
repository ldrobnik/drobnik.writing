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
        staggerChildren: 400
    }
});

const AnimatedQuote = posed.div({
    visible: {
        y: '0%',
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1500
        }
    },
    hidden: {
        y: '50%',
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
                            key={k}
                            pose={props.visible ? 'visible' : 'hidden'}>
                            <Quote
                                quote={text.quote}
                                source={text.source}
                            />
                        </AnimatedQuote>
                    )
                })}
            </AnimatedList>
        </Wrapper>
    );
};

export default QuoteList;