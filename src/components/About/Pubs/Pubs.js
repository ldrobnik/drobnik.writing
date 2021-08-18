import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {setPageReload} from '../../../actions';
import {
    PubsWrapper,
    PubsMessage,
    PubsSwitchPanel,
    PubsSwitchWrapper,
    PubsLabel,
    PubsSubsectionHeading,
    PubsSeparator,
    SectionSeparator,
    FADE_DURATION
} from '../../../styled';
import {AnimatedContent, PubsAnimatedMessage, PubsAnimatedPanel} from '../../../posed';
import {WEBSITE_TEXT} from './../../../data/constants';
import SectionHeading from './../../UI/SectionHeading/SectionHeading'
import ToggleSwitch from './../../UI/ToggleSwitch/ToggleSwitch';
import PubList from './PubList/PubList';
import SectionLinks from '../SectionLinks/SectionLinks';

export const Pubs = (props) => {

    //specifies whether texts in English should be displayed
    const [en, setEn] = useState(true);

    //specifies whether texts in Polish should be displayed
    const [pl, setPl] = useState(true);

    //specifies whether the message should be visible
    const [messageVisible, setMessageVisible] = useState(false);

    //specifies whether the publications should be visible
    const [pubsVisible, setPubsVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //switches the visibility of publications off and on
    const refreshPubs = () => {
        setPubsVisible(false);
        setTimeout(() => setPubsVisible(true), 200);
    };
    //toggles the display of English pubs and if both en and pl are false, sets pl to true
    const setEnHandler = () => {
        setEn(!en);
        if (en && !pl) setPl(true);
        refreshPubs(); //switches the pub tiles off and on
    };

    //toggles the display of Polish pubs and if both en and pl are false, sets en to true
    const setPlHandler = () => {
        setPl(!pl);
        if (!en && pl) setEn(true);
        refreshPubs(); //switches the pub tiles off and on
    };

    //shows the message and publications
    const showPubs = () => {
        setMessageVisible(true); //shows the message immediately
        setTimeout(() => setPubsVisible(true), 1000); //shows pub tiles after a while
    };

    //hides the message and publications
    const hidePubs = () => {
        setMessageVisible(false);
        setPubsVisible(false);
    };

    useEffect(() => {

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    //hide publications whenever the pathname or language change
    useEffect(() => {

            setTimeout(hidePubs, 100);

        },
        [props.location.pathname, props.lang]
    );


    return (
        <PubsWrapper>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <SectionHeading
                    title={WEBSITE_TEXT.publications.title[props.lang]}
                    subtitle=""
                />
                <Waypoint
                    onEnter={showPubs}/>
            </AnimatedContent>
            <PubsAnimatedMessage
                pose={messageVisible ? 'visible' : 'hidden'}>
                <PubsMessage>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].label}</PubsMessage>
            </PubsAnimatedMessage>
            <PubsAnimatedPanel
                pose={messageVisible ? 'visible' : 'hidden'}>
                <PubsSwitchPanel>
                    <label>
                        <PubsSwitchWrapper>
                            <ToggleSwitch
                                checked={en}
                                onChange={setEnHandler}
                            />
                            <PubsLabel>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].english}</PubsLabel>
                        </PubsSwitchWrapper>
                    </label>
                    <label>
                        <PubsSwitchWrapper>
                            <ToggleSwitch
                                checked={pl}
                                onChange={setPlHandler}
                            />
                            <PubsLabel>{WEBSITE_TEXT.publications.chooseLanguage[props.lang].polish}</PubsLabel>
                        </PubsSwitchWrapper>
                    </label>
                </PubsSwitchPanel>
            </PubsAnimatedPanel>
            <Waypoint
                onEnter={showPubs}/>
            <AnimatedContent
                pose={pubsVisible ? 'visible' : 'hidden'}>
                <PubsSeparator/>
                <Waypoint
                    onEnter={showPubs}/>
                <PubsSubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].books}</PubsSubsectionHeading>
                <PubList
                    en={en}
                    pl={pl}
                    visible={pubsVisible}
                    type="books"
                />
                <Waypoint
                    onEnter={showPubs}/>
                <PubsSeparator/>
                <PubsSubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].press}</PubsSubsectionHeading>
                <PubList
                    en={en}
                    pl={pl}
                    visible={pubsVisible}
                    type="press"/>
                <PubsSeparator/>
                <PubsSubsectionHeading>{WEBSITE_TEXT.publications.headlines[props.lang].collections}</PubsSubsectionHeading>
                <PubList
                    en={en}
                    pl={pl}
                    visible={pubsVisible}
                    type="collections"/>
                <SectionLinks
                    lang={props.lang}
                    top={true}
                    books={true}
                    pubs={false}
                    read={true}
                />
                <SectionSeparator/>
            </AnimatedContent>
        </PubsWrapper>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pubs));