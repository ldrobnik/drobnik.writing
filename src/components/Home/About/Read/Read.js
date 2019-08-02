import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import {PUBLICATIONS, WEBSITE_TEXT, TEXT_NAMES, TEXTS} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import SectionLinks from "../SectionLinks/SectionLinks";
import CentredButton from "../../../UI/CentredButton/CentredButton";

const Wrapper = styled.div`
  text-align: center;
`;

const Message = styled.p`
  font-weight: bold;
  font-size: ${props => props.theme.bodySize};
`;

const Read = (props) => {

    //The Back to Top link
    const backToTop = <AnchorLink href='#top'>{WEBSITE_TEXT.text.backToTop[props.lang]}</AnchorLink>;

    return (
        <Wrapper>
            <SectionHeading
                title={WEBSITE_TEXT.read.title[props.lang]}
                subtitle=""
            />
            <Message>{WEBSITE_TEXT.read.introduction[props.lang]}</Message>
            {TEXT_NAMES.map((text) => {
                    let textLink = '/texts/' + text;
                    return (
                        <CentredButton
                            message={TEXTS[props.lang][text].title}
                            path={textLink}
                            link={true}
                            capital={TEXTS[props.lang][text].title[0]}/>
                        )
            })}
            <SectionLinks
                lang={props.lang}
                top={true}
                nocturine={true}
                pubs={true}
                read={false}
            />
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Read);