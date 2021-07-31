import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    setTheme,
    setCurrentText,
    setNavbarVisibility,
    setDataNoticeVisible,
    setMainPage,
    setBlogPage,
    setPageReload, setBookPage
} from '../../actions';
import {AnimatedContent} from '../../posed';
import {FADE_DURATION} from './../../data/constants';
import SectionSeparator from '../UI/SectionSeparator/SectionSeparator';
import InvisibleSeparator from '../UI/InvisibleSeparator/InvisibleSeparator';
import SubpageLinks from '../UI/SubpageLinks/SubpageLinks';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';
import {BookPage} from '../BookPage/BookPage';

export const Blog = props => {
    return (
        <React.Fragment>Blog</React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        bwMode: state.blackAndWhite,
        noticeVisible: state.dataNoticeVisible,
        noticeAccepted: state.dataNoticeAccepted,
        reload: state.pageReload,
        loaded: state.pageLoaded
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setTheme,
        setCurrentText,
        setNavbarVisibility,
        setDataNoticeVisible,
        setMainPage,
        setBlogPage,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);