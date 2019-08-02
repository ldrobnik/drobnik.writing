import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {WEBSITE_TEXT} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import CentredButton from "../../../UI/CentredButton/CentredButton";

const Body = styled.div`
  text-align: left;
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
`;

const Nocturine = (props) => {

    return (
        <React.Fragment>
            <SectionHeading
                title={WEBSITE_TEXT.nocturine.title[props.lang]}
                subtitle=""
            />
            <Body>
                {WEBSITE_TEXT.nocturine.body[props.lang]}
            </Body>
            <CentredButton
                message={WEBSITE_TEXT.nocturine.button[props.lang].message}
                path={WEBSITE_TEXT.nocturine.button[props.lang].path}
                link={true}
                capital='m'/>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Nocturine);