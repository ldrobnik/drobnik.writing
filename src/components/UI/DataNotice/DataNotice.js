import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setDataNoticeVisible, setDataNoticeAccepted} from '../../../actions';
import {Notice, NoticeMessage, NoticeDismissButton} from '../../../styles/shared';
import {AnimatedContent} from '../../../animations/shared';
import {WEBSITE_TEXT} from '../../../data/constants';

export const DataNotice = props => {

    //notice content to be displayed
    const [noticeVisible, setNoticeVisible] = useState(false);

    //specifies whether the fade in animation should be played
    const [noticeFadeIn, setNoticeFadeIn] = useState(false);
    //updates Redux states, setting data notice acceptance to true and data notice visibility to false, and stores the data in localStorage
    const acceptDataNotice = () => {

        //update Redux states
        props.setDataNoticeVisible(false); //sets data storage notice display to false
        props.setDataNoticeAccepted(true); //sets data storage acceptance to true

        //store information about accepting the notice in localStorage
        localStorage.setItem('dataNoticeAccepted', true);
    };

    //sets the notice as visible and schedules fade-in animation
    const setContent = () => {
        setNoticeVisible(true);
        if (props.noticeVisible) {
            setNoticeFadeIn(true);
        }
    };


    //the content of notice to be displayed depending on the setNoticeVisible value
    const notice = (props.noticeVisible && noticeVisible) ?
        (<Notice>
            <AnimatedContent
                pose={noticeFadeIn ? 'visible' : 'hidden'}>
                <NoticeMessage>
                    {WEBSITE_TEXT.dataNotice[props.lang].message}
                </NoticeMessage>
                <NoticeDismissButton
                    onClick={acceptDataNotice} c
                >
                    {WEBSITE_TEXT.dataNotice[props.lang].button}
                </NoticeDismissButton>
            </AnimatedContent>
        </Notice>) :
        <div></div>;

    useEffect(() => {
        setTimeout(setContent, 2500);
    });

    return (
        <React.Fragment>
            {notice}
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        noticeVisible: state.dataNoticeVisible,
        noticeAccepted: state.dataNoticeAccepted
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setDataNoticeVisible,
        setDataNoticeAccepted
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DataNotice);