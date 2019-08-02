import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { WEBSITE_TEXT } from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'

const StyledWrapper = styled.div`

`;

const Nocturine = (props) => {

    return (
        <StyledWrapper>
            <SectionHeading
                title={WEBSITE_TEXT.nocturine.title[props.lang]}
                subtitle=""
            />
            {WEBSITE_TEXT.nocturine.body[props.lang]}
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Nocturine);