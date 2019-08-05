import React, {useState} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from "react-waypoint";
import {connect} from 'react-redux';
import {WEBSITE_TEXT, TEXT_NAMES, TEXTS} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import SectionLinks from "../SectionLinks/SectionLinks";
import SectionSeparator from "../../../UI/SectionSeparator/SectionSeparator";
import ReadListElement from './ReadListElement/ReadListElement';

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

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 200,
        staggerChildren: 100
    }
});

const AnimatedLink = posed.div({
    visible: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 100 }
    },
    hidden: {
        x: '200%'
    }
});

const Read = (props) => {

    //specifies whether text links should be visible
    const [linksVisible, setLinksVisible] = useState(false);

    //shows the text links
    const showLinks = () => {
        setLinksVisible(true);
    };
    return (
        <Wrapper>
            <SectionHeading
                title={WEBSITE_TEXT.read.title[props.lang]}
                subtitle=""
            />
            <Message>{WEBSITE_TEXT.read.introduction[props.lang]}</Message>
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
            <SectionLinks
                lang={props.lang}
                top={true}
                nocturine={true}
                pubs={true}
                read={false}
            />
            <SectionSeparator/>
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Read);