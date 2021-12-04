import React, {useState, useEffect, Suspense, lazy} from 'react';
import {useHistory} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Markdown from 'markdown-to-jsx/dist/index.js';
import {HighlightedMarkdown} from '../highlighted-markdown';
import {
    setTheme,
    setCurrentText,
    setNavbarVisibility,
    setDataNoticeVisible,
    setPage,
    setPageReload
} from '../../../actions';
import {AnimatedContent} from '../../../animations/shared';
import {SectionSeparator, FADE_DURATION} from '../../../styles/shared';
import {
    BlogTopAnchor,
    BlogPost,
    BlogWrapper,
    BlogSeparator,
    BlogNoteReadMore,
    BlogNoteBio
} from '../../../styles/blog';
import {WEBSITE_TEXT_BLOG, ALL_BLOG_NOTES, BLOG_CATEGORIES} from '../../../data/constants';
import ThemeWrapper from './../ThemeWrapper/ThemeWrapper';
import BlogNoteCredits from '../BlogNoteCredits/BlogNoteCredits';
import BlogImage from './BlogImage/BlogImage';
import SmallSpinner from '../../UI/SmallSpinner/SmallSpinner';

const TopImage = lazy(() => import('./TopImage/TopImage'));
const BlogBio = lazy(() => import('../BlogBio/BlogBio'));
const BlogNoteList = lazy(() => import('../BlogNoteList/BlogNoteList'));
const SubpageLinks = lazy(() => import('../../UI/SubpageLinks/SubpageLinks'));
const CopyrightNote = lazy(() => import('../../UI/CopyrightNote/CopyrightNote'));

export const BlogNote = props => {


    const history = useHistory();

    //redirects to the main blog page
    const goToMainBlogPage = () => history.push('/blog');

    //visibility of the page
    const [visible, setVisible] = useState(false);

    //ID of the blog note to be displayed
    const [noteId, setNoteId] = useState('');

    //title of the blog note
    const [noteTitle, setNoteTitle] = useState('');

    //publish date of the blog note
    const [noteDate, setNoteDate] = useState('');

    //category of the blog note
    const [noteCategory, setNoteCategory] = useState('');

    //related notes displayed below the text
    const [relatedNotes, setRelatedNotes] = useState([]);

    //credits of the top image
    const [imageCredits, setImageCredits] = useState({});

    //indicates whether the same image should be used for the category
    const [sameImage, setSameImage] = useState(false);

    //specifies the source of the top image
    const [imageSrc, setImageSrc] = useState('');

    //blogpost to be displayed
    const [note, setNote] = useState('');

    //minimum note length for it to be displayed
    const minNoteLength = 40;

    //shows the content
    const showContent = () => {
        setTimeout(() => setVisible(true), FADE_DURATION);
        props.setPageReload(false);
    };

    //creates an array of related notes
    const createRelatedNotes = relatedNoteIds => {

        //an array to hold all notes that match the IDs
        let relatedNotes = [];

        for (const id of relatedNoteIds) {
            for (const note of ALL_BLOG_NOTES) {
                //if the id of the note matches the related note id, add it to the array
                if (note.id === id) {
                    relatedNotes.push(note);
                }
            }
        }

        return relatedNotes;
    }

    //checks blog note data
    const identifyBlogNote = () => {

        //the base URL for all blog notes
        let baseUrl = '/blog/';


        for (let note of ALL_BLOG_NOTES) {

            //if the URL includes the blog note ID, set the data of this note
            if ((baseUrl + note.id === props.location.pathname) || (baseUrl + note.id + '/' === props.location.pathname)) {

                //set note data
                setNoteId(note.id); //ID
                setNoteTitle(note.title); //Title
                setNoteDate(note.date); //Date
                setNoteCategory(note.category); //Note category
                setSameImage(note.sameImgForCategory); //Specifies whether the image should be used for a category
                setRelatedNotes(createRelatedNotes(note.related)); //List of related notes
                setImageCredits(note.imageCredits); //Image description and alt text

                return true;
            }
        }


        //if the URL doesn't match any blog note, go to the main blog page
        goToMainBlogPage();

    }

    //sets off page reloading animation
    const reloadPage = () => {
        setVisible(false); //hide content on page reload
        setNoteId(''); //reset note value
        setImageSrc(''); //reset image source
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

    //imports blog note
    const importBlogNote = noteId => {
        //imports markdown documents and coverts it into text
        import(`./../../../data/blognotes/${noteId}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setNote(res))
                    .then(() => showContent())
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    //imports the appropriate image
    const importImage = id => {
        import(`./../../../assets/images/blog/${id}.jpg`)
            .then(res => {
                fetch(res.default)
                    .then(res => setImageSrc(res.url))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        //Update page title with the piece title
        document.title = `${noteTitle} - ${BLOG_CATEGORIES[noteCategory]}`;


        //sets theme to black and white
        setBwTheme();

        //show Navbar
        showNavbar();

        //checks whether data storage notice should be visible and if so, turn is on
        checkDataNotice();

        //lets the Redux store know that the Text page is currently displayed
        setCurrentPage('blog');

        //if the blog note hasn't been loaded yet, identify the blog note based on the URL
        if (note.length < 1) identifyBlogNote();

    });

    useEffect(() => {

        //resets image source
        setImageSrc('');

        //imports markdown documents and coverts it into text
        if (noteId.length > 0) {
            importBlogNote(noteId);

            if (sameImage) {
                importImage(noteCategory); //If a category uses only one image, import this image instead of a note-specific image
            } else {
                importImage(noteId); //Otherwise import a note-specific image
            }

        }

    }, [props.location.pathname, noteId]);

    //load a new blog note anytime the path changes
    useEffect(() => {

        //identify the blog note based on the URL
        identifyBlogNote();

        //imports markdown documents and coverts it into text
        if (noteId.length > 0) {
            importBlogNote(noteId);
            importImage(noteId);
        }

        //shows content if note is displayed
        if (note.length > minNoteLength) showContent();

        //clean up state when unmounting
        return () => {
            setNoteId('');
            setNoteTitle('');
            setNoteDate('');
            setNoteCategory('');
            setSameImage(false);
            setRelatedNotes([]);
            setImageCredits({});
            setImageSrc('');
            setNote('');
        }

    }, []);

    useEffect(() => {
        //shows content if note is displayed
        if (note.length > minNoteLength) showContent();
    });

    //load a new blog note anytime the path changes
    useEffect(() => {

        //identify the blog note based on the URL
        identifyBlogNote();

        //imports markdown documents and coverts it into text
        if (noteId.length > 0) {
            importBlogNote(noteId);
            importImage(noteId);
        }

        //shows content if note is displayed
        if (note.length > minNoteLength) showContent();

    }, [props.location.pathname]);

    useEffect(() => {
        //when the image source changes, hide content
        setVisible(false);
    }, [imageSrc])


    useEffect(() => {

        //hides and shows content on reload
        setVisible(false);
        if (noteId.length > minNoteLength) showContent();

    }, [props.reload]);

    //do not show the content until the page is loaded
    return props.loaded && (noteId.length > 1) &&
        <BlogWrapper>
            <BlogTopAnchor>
                <div id='top'></div>
            </BlogTopAnchor>
            <ThemeWrapper theme={noteCategory}>
                <Suspense fallback={<SmallSpinner/>}>
                    <TopImage
                        imageSrc={imageSrc}
                        imageCredits={imageCredits}
                        visible={visible}
                    />
                </Suspense>
                <AnimatedContent
                    pose={visible ? 'visible' : 'hidden'}>
                    <BlogNoteCredits
                        title={noteTitle}
                        category={noteCategory}
                        date={noteDate}
                    />
                </AnimatedContent>
                <BlogPost>
                    <AnimatedContent
                        pose={visible ? 'visible' : 'hidden'}>
                        <HighlightedMarkdown>
                            <Markdown
                                options={{
                                    overrides: {
                                        a: {
                                            props: {
                                                target: '_blank',
                                                rel: 'noopener noreferrer'
                                            },
                                        },
                                        img: {
                                            component: BlogImage,
                                            props: {
                                                style: {
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto'
                                                }
                                            }
                                        },
                                        br: {
                                            component: BlogSeparator,
                                            props: {
                                                className: 'colouredBackground'
                                            }
                                        },
                                        hr: {
                                            component: SectionSeparator,
                                            props: {
                                                className: 'colouredBackground'
                                            }
                                        }
                                    },
                                }}
                            >
                                {note}
                            </Markdown>
                        </HighlightedMarkdown>
                    </AnimatedContent>
                    <div id='bio'></div>
                    <Suspense fallback={<SmallSpinner />}>
                        <AnimatedContent
                            pose={visible ? 'visible' : 'hidden'}>
                            <BlogSeparator className={'colouredBackground'}/>
                            <BlogNoteBio>
                                <Suspense fallback={<SmallSpinner />}>
                                    <BlogBio/>
                                </Suspense>
                            </BlogNoteBio>
                            <BlogSeparator className={'colouredBackground'}/>
                            <BlogNoteReadMore className={'coloured'}>
                                {WEBSITE_TEXT_BLOG.readMore}
                            </BlogNoteReadMore>
                        </AnimatedContent>
                    </Suspense>
                </BlogPost>
            </ThemeWrapper>
            <Suspense fallback={<SmallSpinner />}>
                <BlogNoteList
                    linklist={relatedNotes}
                    showCategories={true}
                />
                <AnimatedContent
                    pose={visible ? 'visible' : 'hidden'}
                >
                    <SubpageLinks
                        lang={'en'}
                        reloadPage={reloadPage}
                        blog={true}
                    />
                    <SectionSeparator/>
                    <CopyrightNote/>
                </AnimatedContent>
            </Suspense>
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

export default connect(mapStateToProps, mapDispatchToProps)(BlogNote);