import React, {useState, useEffect} from 'react';
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from 'react-waypoint';

import {setPageReload} from "../../../actions";
import {WEBSITE_TEXT, FADE_DURATION, PULSATE_KEYFRAMES, AnimatedContent} from './../../../data/constants';

import nocturineCover from '../../../assets/images/nocturineCover.jpg';
import CentredPhoto from '../../UI/CentredPhoto/CentredPhoto';
import SectionHeading from '../../UI/SectionHeading/SectionHeading'
import QuoteList from '../QuoteList/QuoteList';
import CentredButton from "../../UI/CentredButton/CentredButton";
import SectionLinks from "../SectionLinks/SectionLinks";
import SectionSeparator from "../../UI/SectionSeparator/SectionSeparator";
import SmallSeparator from "../../UI/SmallSeparator/SmallSeparator";

/* STYLED COMPONENTS */

const Body = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.serif};
  line-height: 1.4em;
  margin-top: 1.3em;
  
     @media all and (min-width: ${props => props.theme.smallScr}) {
             text-align: justify;
        }  
   
`;

const Slogan = styled.div`
  font-size: ${props => props.theme.bodySize};
  font-family: ${props => props.theme.sansSerif};
  line-height: 1.4em;
  text-align: center;
  text-transform: uppercase;
  
      a {
       @media all and (min-width: ${props => props.theme.smallScr}) {
             &:hover {
                      animation: ${PULSATE_KEYFRAMES} ${props => props.theme.pulsateAnimation};
             }
        }  
    }
`;


/* POSE */
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

export const Nocturine = (props) => {

    //specifies whether the quotes should be displayed - triggered by scrolling to the Waypoint element
    const [quotesVisible, setQuotesVisible] = useState(false);

    //specifies whether the excerpt button should be visible
    const [buttonVisible, setButtonVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //sets quote visibility to true
    const showQuotes = () => {
        setQuotesVisible(true);
    };

    //sets button visibility to true
    const showButton = () => {
        setButtonVisible(true);
    };

    //sets quotes and button visibility to false
    const hideElements = () => {
        setQuotesVisible(false);
        setButtonVisible(false);
    };


    useEffect(() => {

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    //whenever the pathname or language change
    useEffect(() => {

            //hide elements
            setTimeout(hideElements,100);
        },
        [props.location.pathname, props.lang]
    );

    //checks whether the component is displayed as a standalone page rather than part of the main page
    const isStandalone = props.nocturine;

    //if the component is displayed on the standalone book page, do not display the section links
    const sectionLinks = isStandalone ?
        <div></div> :
        <SectionLinks
        lang={props.lang}
        top={true}
        nocturine={false}
        pubs={true}
        read={true}
    />;

    //if the component is displayed on the standalone book page, do not display the section separator
    const sectionSeparator = isStandalone ? <div></div> : <SectionSeparator/>;

    return (
        <React.Fragment>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.nocturine.title[props.lang]}
                    subtitle=""
                />
                <SmallSeparator />
                <CentredPhoto
                    source={nocturineCover}
                    altText='Nocturine cover'
                />
                <Slogan>
                    {WEBSITE_TEXT.nocturine.slogan[props.lang]}
                </Slogan>
                <Body>
                    {WEBSITE_TEXT.nocturine.body[props.lang]}
                </Body>
            </AnimatedContent>
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
            <AnimatedButton
                pose={buttonVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={WEBSITE_TEXT.nocturine.button[props.lang].message}
                    path={WEBSITE_TEXT.nocturine.button[props.lang].path}
                />
            </AnimatedButton>
            <Waypoint
                onEnter={showQuotes}
            />
            <Waypoint
                onEnter={showButton}
            />
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                {sectionLinks}
                <Waypoint
                    onEnter={showQuotes}
                />
                <Waypoint
                    onEnter={showButton}
                />
                {sectionSeparator}
            </AnimatedContent>
            <Waypoint
                onEnter={showQuotes}
            />
            <Waypoint
                onEnter={showButton}
            />
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload,
        nocturine: state.nocturinePageDisplayed
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nocturine));