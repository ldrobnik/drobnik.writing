import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { WEBSITE_TEXT } from '../../../../data/constants';


const StyledWrapper = styled.div`

`;

const Nocturine = (props) => {

    return (
        <StyledWrapper>
            <h1>{WEBSITE_TEXT.nocturine.title[props.lang]}</h1>
            {WEBSITE_TEXT.nocturine.body[props.lang].map((paragraph, k) => {
                    return (
                        <p key={k}>
                            {paragraph}
                        </p>
                    )
                }
            )}
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae mollitia pariatur quae tempore!</p>
            <p>Adipisci aliquam amet culpa delectus dolore dolorem eaque eius enim esse eveniet exercitationem incidunt iusto molestiae, non quaerat quibusdam quisquam ratione repellendus saepe vero voluptatem?</p>
        </StyledWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language
    };
};

export default connect(mapStateToProps)(Nocturine);