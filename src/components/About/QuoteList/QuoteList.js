import React from 'react';
import {QuoteListWrapper} from '../../../styled';
import {AnimatedQuoteList, AnimatedQuote} from '../../../posed';
import {BOOKS} from './../../../data/constants';
import Quote from './Quote/Quote';

const QuoteList = props => {

    return (
        <QuoteListWrapper>
            <AnimatedQuoteList
                pose={props.visible ? 'visible' : 'hidden'}>
                {BOOKS[props.book].quotes[props.lang].map((text, k) => {
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
            </AnimatedQuoteList>
        </QuoteListWrapper>
    );
};

export default QuoteList;