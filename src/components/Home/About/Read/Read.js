import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import {connect} from 'react-redux';
import {WEBSITE_TEXT, TEXT_NAMES, TEXTS, FADE_DURATION} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import SectionLinks from "../SectionLinks/SectionLinks";
import SectionSeparator from "../../../UI/SectionSeparator/SectionSeparator";
import ReadListElement from './ReadListElement/ReadListElement';
import * as actionTypes from "../../../../store/actions";

/* STYLED COMPONENTS */
const Wrapper = styled.div`
  text-align: center;
`;

const Message = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.bodySize};
  margin: 2em 0;
`;

/* POSE */
const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0px)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

const AnimatedList = posed.div({
    visible: {
        delayChildren: 400,
        staggerChildren: 150
    }
});

const AnimatedLink = posed.div({
    visible: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        x: '200%'
    }
});

const Read = (props) => {

    //specifies whether text links should be visible
    const [linksVisible, setLinksVisible] = useState(false);

    //specifies whether the content should be visible
    const [contentVisible, setContentVisible] = useState(false);

    //shows the content
    const showContent = () => {
        setContentVisible(true);
    };

    //shows the text links
    const showLinks = () => {
        setLinksVisible(true);
    };

    useEffect(() => {

        //show content after a while
        setTimeout(
            () => {
                showContent();
            }, FADE_DURATION
        );

    });
    return (
        <Wrapper>
            <AnimatedContent
                pose={contentVisible ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.read.title[props.lang]}
                    subtitle=""
                />
                <Message>{WEBSITE_TEXT.read.introduction[props.lang]}</Message>
            </AnimatedContent>
            <Waypoint
                onEnter={showLinks}
            />
            <AnimatedList
                pose={linksVisible ? 'visible' : 'hidden'}>
                {TEXT_NAMES.map((text, k) => {
                    let textLink = '/texts/' + text;
                    return (
                        <AnimatedLink
                            pose={linksVisible ? 'visible' : 'hidden'}
                            key={k}>
                            <ReadListElement
                                title={TEXTS[props.lang][text].title}
                                subtitle={TEXTS[props.lang][text].subtitle}
                                path={textLink}
                            />
                        </AnimatedLink>
                    )
                })}
            </AnimatedList>
            <AnimatedContent
                pose={contentVisible ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    nocturine={true}
                    pubs={true}
                    read={false}
                />
                <SectionSeparator/>
            </AnimatedContent>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onReloadChange: (newState) => dispatch({
            type: actionTypes.SET_PAGE_RELOAD,
            pageReload: newState
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Read);