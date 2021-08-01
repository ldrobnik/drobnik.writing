import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {setPageReload} from '../../../actions';
import {ReadWrapper, ReadMessage, FADE_DURATION} from '../../../styled';
import {AnimatedContent, AnimatedReadList, AnimatedReadLink} from '../../../posed';
import {WEBSITE_TEXT, HIGHLIGHTS, TEXTS} from './../../../data/constants';
import SectionHeading from './../../UI/SectionHeading/SectionHeading'
import SectionLinks from '../SectionLinks/SectionLinks';
import SectionSeparator from './../../UI/SectionSeparator/SectionSeparator';
import ReadListElement from './ReadListElement/ReadListElement';


export const Read = (props) => {

    //specifies whether text links should be visible
    const [linksVisible, setLinksVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //shows the text links
    const showLinks = () => {
        setLinksVisible(true);
    };

    //hides the text links
    const hideLinks = () => {
        setLinksVisible(false);
    };

    //hide message whenever the pathname or language change
    useEffect(() => {
            setTimeout(hideLinks, 100);
        },
        [props.location.pathname, props.lang]
    );

    useEffect(() => {

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    return (
        <ReadWrapper>

            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.read.title[props.lang]}
                    subtitle=""
                />
                <ReadMessage>{WEBSITE_TEXT.read.introduction[props.lang]}</ReadMessage>
            </AnimatedContent>
            <Waypoint
                onEnter={showLinks}
            />
            <AnimatedReadList
                pose={linksVisible ? 'visible' : 'hidden'}>
                {HIGHLIGHTS.map((text, k) => {
                    let textLink = '/texts/' + text;
                    return (
                        <AnimatedReadLink
                            pose={linksVisible ? 'visible' : 'hidden'}
                            key={k}>
                            <ReadListElement
                                title={TEXTS[props.lang][text].title}
                                subtitle={TEXTS[props.lang][text].subtitle}
                                path={textLink}
                            />
                        </AnimatedReadLink>
                    )
                })}
            </AnimatedReadList>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    books={true}
                    pubs={true}
                    read={false}
                />
                <Waypoint
                    onEnter={showLinks}
                />
                <SectionSeparator/>
            </AnimatedContent>
            <Waypoint
                onEnter={showLinks}
            />
        </ReadWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Read));