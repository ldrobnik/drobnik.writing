import React, {useState, useEffect} from 'react';
import {bindActionCreators} from "redux";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import posed from 'react-pose';
import {Waypoint} from 'react-waypoint';

import {setPageReload} from "../../../actions";
import {EXCERPT_BUTTON, BOOKS, FADE_DURATION, PULSATE_KEYFRAMES, AnimatedContent} from './../../../data/constants';

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
  margin-bottom: 2.5em;
  
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

export const Book = (props) => {

    //specifies whether the quotes should be displayed - triggered by scrolling to the Waypoint element
    const [quotesVisible, setQuotesVisible] = useState(false);

    //specifies whether the preorder button should be visible
    const [preorderBtnVisible, setPreorderBtnVisible] = useState(false);

    //specifies whether the excerpt button should be visible
    const [excerptBtnVisible, setExcerptBtnVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //sets preorder button visibility to true
    const showPreorderBtn = () => {
        setPreorderBtnVisible(true);
    };


    //sets quote visibility to true
    const showQuotes = () => {
        setQuotesVisible(true);
    };

    //sets excerpt button visibility to true
    const showExcerptBtn = () => {
        setExcerptBtnVisible(true);
    };

    //sets quotes and button visibility to false
    const hideElements = () => {
        setQuotesVisible(false);
        setExcerptBtnVisible(false);
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
                    title={BOOKS[props.book].title[props.lang]}
                    subtitle=""
                />
                <SmallSeparator />
                <CentredPhoto
                    source={BOOKS[props.book].cover}
                    altText='Book cover'
                    link={BOOKS[props.book].url}
                />
                <Slogan>
                    {BOOKS[props.book].slogan[props.lang]}
                </Slogan>
                <Body>
                    {BOOKS[props.book].body[props.lang]}
                </Body>
            </AnimatedContent>
            <Waypoint
                onEnter={showQuotes}
                bottomOffset="25%"
            />
            <Waypoint
                onEnter={showPreorderBtn}
            />
            <AnimatedButton
                pose={preorderBtnVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={BOOKS[props.book].orderButton[props.lang]}
                    path={BOOKS[props.book].url}
                />
            </AnimatedButton>
            <QuoteList
                book={props.book}
                lang={props.lang}
                visible={quotesVisible}
            />
            <Waypoint
                onEnter={showExcerptBtn}
            />
            <AnimatedButton
                pose={excerptBtnVisible ? 'visible' : 'hidden'}>
                <CentredButton
                    message={EXCERPT_BUTTON[props.lang]}
                    path={'/texts/' + BOOKS[props.book].id}
                />
            </AnimatedButton>
            <Waypoint
                onEnter={showQuotes}
            />
            <Waypoint
                onEnter={showExcerptBtn}
            />
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                {sectionLinks}
                <Waypoint
                    onEnter={showQuotes}
                />
                <Waypoint
                    onEnter={showExcerptBtn}
                />
                {sectionSeparator}
            </AnimatedContent>
            <Waypoint
                onEnter={showQuotes}
            />
            <Waypoint
                onEnter={showExcerptBtn}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Book));