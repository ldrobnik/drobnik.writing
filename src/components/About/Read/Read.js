import React, {useState, useEffect} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";

import * as actionTypes from "../../../actions/constants";
import {WEBSITE_TEXT, TEXT_NAMES, TEXTS, FADE_DURATION, AnimatedContent} from './../../../data/constants';

import SectionHeading from './../../UI/SectionHeading/SectionHeading'
import SectionLinks from "../SectionLinks/SectionLinks";
import SectionSeparator from "./../../UI/SectionSeparator/SectionSeparator";
import ReadListElement from './ReadListElement/ReadListElement';

/* STYLED COMPONENTS */
const Wrapper = styled.div`
  text-align: center;
`;

const Message = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.bodySize};
  margin: 3em 0;
`;

/* POSE */
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
        x: '300%'
    }
});

export const Read = (props) => {

    //specifies whether text links should be visible
    const [linksVisible, setLinksVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.onReloadChange(false);
    };

    //shows the text links
    const showLinks = () => {
        setLinksVisible(true);
    };

    //hides the text links
    const hideLinks = () => {
        setLinksVisible(false);
    };

    //hide message whenever the pathname or language change
    useEffect(() => {
            setTimeout(hideLinks,100);
        },
        [props.location.pathname, props.lang]
    );

    // //hide message and show it right away whenever the language changes
    // useEffect(() => {
    //         setTimeout(hideLinks,100);
    //         setTimeout(showLinks, 800);
    //     },
    //     [props.lang]
    // );

    useEffect(() => {

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    return (
        <Wrapper>
            {/*<Waypoint*/}
            {/*    onEnter={hideLinks}*/}
            {/*/>*/}
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
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
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    nocturine={true}
                    pubs={true}
                    read={false}
                />
                <Waypoint
                    onEnter={showLinks}
                />
                <SectionSeparator/>
            </AnimatedContent>
            <Waypoint
                onEnter={showLinks}
            />
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Read));