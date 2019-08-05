import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {WEBSITE_TEXT, TEXT_NAMES, TEXTS} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import SectionLinks from "../SectionLinks/SectionLinks";
import CentredButton from "../../../UI/CentredButton/CentredButton";
import SectionSeparator from "../../../UI/SectionSeparator/SectionSeparator";
import ReadListElement from './ReadListElement/ReadListElement';

const Wrapper = styled.div`
  text-align: center;
`;

const Message = styled.div`
  font-weight: bold;
  font-size: ${props => props.theme.bodySize};
  margin: 2em 0;
`;

const Read = (props) => {

    //decorative letters to be displayed on the buttons
    const letters = ['D', 'R', 'O', 'B', 'N', 'I', 'K'];

    return (
        <Wrapper>
            <SectionHeading
                title={WEBSITE_TEXT.read.title[props.lang]}
                subtitle=""
            />
            <Message>{WEBSITE_TEXT.read.introduction[props.lang]}</Message>
            {TEXT_NAMES.map((text, k) => {
                let textLink = '/texts/' + text;
                return (
                    <ReadListElement
                        title={TEXTS[props.lang][text].title}
                        subtitle={TEXTS[props.lang][text].subtitle}
                        path={textLink}
                        key={k}/>
                )
            })}
            <SectionLinks
                lang={props.lang}
                top={true}
                nocturine={true}
                pubs={true}
                read={false}
            />
            <SectionSeparator />
        </Wrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Read);