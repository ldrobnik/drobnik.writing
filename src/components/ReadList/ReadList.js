import React from 'react';
import {connect} from 'react-redux';
import {AnimatedReadList, AnimatedReadLink} from '../../animations/about';
import {TEXT_NAMES, TEXTS} from '../../data/constants';
import ReadListElement from './ReadListElement/ReadListElement';

export const ReadList = props => {

    return (
            <AnimatedReadList
                pose={props.linksVisible ? 'visible' : 'hidden'}>
                {TEXT_NAMES.map((text, k) => {
                    let textLink = '/texts/' + text;
                    return (
                        <AnimatedReadLink
                            pose={props.linksVisible ? 'visible' : 'hidden'}
                            key={k}>
                            <ReadListElement
                                title={TEXTS[props.lang][text].title}
                                subtitle={TEXTS[props.lang][text].subtitle}
                                path={textLink}
                            />
                        </AnimatedReadLink>
                    )
                })}
            </AnimatedReadList>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(ReadList);