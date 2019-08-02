import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { connect } from 'react-redux';
import {PUBLICATIONS, WEBSITE_TEXT, TEXT_NAMES, TEXTS} from '../../../../data/constants';
import SectionHeading from '../SectionHeading/SectionHeading'

const StyledWrapper = styled.div`

`;

const Read = (props) => {

    //The Back to Top link
    const backToTop = <AnchorLink href='#top'>{WEBSITE_TEXT.text.backToTop[props.lang]}</AnchorLink>;

    return (
        <StyledWrapper>
            <SectionHeading
                title={WEBSITE_TEXT.read.title[props.lang]}
                subtitle=""
            />
            <p>{WEBSITE_TEXT.read.introduction[props.lang]}</p>
            {TEXT_NAMES.map((text) => {
                    let textLink = '/texts/' + text;
                    return (
                        <Link
                            to={textLink}
                            key={text}
                        >
                            <p>{TEXTS[props.lang][text].title}</p>
                        </Link>
                        )
            })}
            <p><i>{backToTop}</i></p>
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Read);