import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Markdown from 'markdown-to-jsx/dist/index.js';
import {
    setTheme,
    setCurrentText,
    setNavbarVisibility,
    setDataNoticeVisible,
    setPage,
    setPageReload
} from '../../actions';
import {AnimatedContent} from '../../posed';
import {BlogTopAnchor, BlogPost, BlogWrapper, FADE_DURATION} from '../../styled';
import {BLOG_NOTES, TEXT_NAMES, TEXTS} from './../../data/constants';
import ThemeWrapper from './ThemeWrapper/ThemeWrapper';
import SectionSeparator from '../UI/SectionSeparator/SectionSeparator';
import InvisibleSeparator from '../UI/InvisibleSeparator/InvisibleSeparator';
import SubpageLinks from '../UI/SubpageLinks/SubpageLinks';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';
import BlogNoteList from './BlogNoteList/BlogNoteList';

export const Blog = props => {

    //filepath to a sample markdown document
    const filename = 'markdown';

    //blogpost to be displayed
    const [post, setPost] = useState('');

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //checks whether the data storage notice should be displayed and turns it on if it is invisible but hasn't been confirmed yet
    const checkDataNotice = () => {
        if (!props.noticeAccepted) {
            props.setDataNoticeVisible(true);
        }
    };

    //shows the NavBar
    const showNavbar = () => {
        props.setNavbarVisibility(true);
    };

    //sets black and white theme
    const setBwTheme = () => {
        props.setTheme('blackAndWhite');
    };

    //lets the Redux store know which page is currently displayed
    const setCurrentPage = (page) => {
        props.setPage(page);
    }

    useEffect(() => {
        //Update page title with the piece title
        document.title = 'Łukasz Drobnik - Blog';

        //sets theme to black and white
        setBwTheme();

        //show Navbar
        showNavbar();

        //checks whether data storage notice should be visible and if so, turn is on
        checkDataNotice();

        //lets the Redux store know that the Text page is currently displayed
        setCurrentPage('blog');

        //show content after a while if page has loaded
        if (props.loaded) {
            setTimeout(showContent, FADE_DURATION);
        }

    });

    useEffect(() => {
        //imports markdown documents and coverts it into text
        import(`./../../data/blognotes/${filename}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    });

    //do not show the content until the page is loaded
    return props.loaded &&
        <BlogWrapper>
            <BlogTopAnchor>
                <div id='top'></div>
            </BlogTopAnchor>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <ThemeWrapper theme={'writing'}>
                    <BlogPost>
                        <div>BLOG</div>
                        <Markdown
                            options={{
                                overrides: {
                                    a: {
                                        props: {
                                            target: '_blank',
                                            rel: 'noopener noreferrer'
                                        },
                                    },
                                },
                            }}
                        >
                            {post}
                        </Markdown>
                    </BlogPost>
                </ThemeWrapper>
            </AnimatedContent>
            <BlogNoteList linklist={BLOG_NOTES}/>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}
            >
                <SubpageLinks
                    lang={'en'}
                    reloadPage={reloadPage}
                />
                <SectionSeparator/>
                <CopyrightNote/>
            </AnimatedContent>
        </BlogWrapper>;
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
        setPage,
        setPageReload
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Blog);