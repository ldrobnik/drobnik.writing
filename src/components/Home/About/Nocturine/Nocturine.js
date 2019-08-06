import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {WEBSITE_TEXT, FADE_DURATION} from '../../../../data/constants';
import SectionHeading from '../../../UI/SectionHeading/SectionHeading'
import CentredButton from "../../../UI/CentredButton/CentredButton";
import SectionLinks from "../SectionLinks/SectionLinks";
import QuoteList from '../QuoteList/QuoteList';
import SectionSeparator from "../../../UI/SectionSeparator/SectionSeparator";
import * as actionTypes from "../../../../store/actions";

/* STYLED COMPONENTS */
const Body = styled.div`
  text-align: left;
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  
    
    a {
      font-family: ${props => props.theme.sansSerif};
    }
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

const AnimatedButton = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});


const Nocturine = (props) => {

    //specifies whether the quotes should be displayed - triggered by scrolling to the Waypoint element
    const [quotesVisible, setQuotesVisible] = useState(false);

    //specifies whether the excerpt button should be visible
    const [buttonVisible, setButtonVisible] = useState(false);

    //specifies whether the content should be visible
    const [contentVisible, setContentVisible] = useState(false);

    //shows the content
    const showContent = () => {
        setContentVisible(true);
    };

    //sets quote visibility to true
    const showQuotes = () => {
        setQuotesVisible(true);
    };

    //sets button visibility to true
    const showButton = () => {
        setButtonVisible(true);
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
        <React.Fragment>
            <AnimatedContent
                pose={contentVisible ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.nocturine.title[props.lang]}
                    subtitle=""
                />
                <Body>
                    {WEBSITE_TEXT.nocturine.body[props.lang]}
                </Body>
                <Waypoint
                    onEnter={showQuotes}
                />
                <QuoteList
                    lang={props.lang}
                    visible={quotesVisible}
                />
                <Waypoint
                    onEnter={showButton}
                />
            </AnimatedContent>
            <AnimatedButton
                pose={buttonVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={WEBSITE_TEXT.nocturine.button[props.lang].message}
                    path={WEBSITE_TEXT.nocturine.button[props.lang].path}
                    capital='m'/>
            </AnimatedButton>
            <AnimatedContent
                pose={contentVisible ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    nocturine={false}
                    pubs={false}
                    read={true}
                />
                <SectionSeparator/>
            </AnimatedContent>
        </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nocturine);