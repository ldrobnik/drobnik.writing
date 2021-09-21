import React, {lazy, Suspense, useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    setTheme,
    setCurrentText,
    setNavbarVisibility,
    setDataNoticeVisible,
    setPage,
    setPageReload
} from '../../actions';
import {AnimatedContent} from '../../animations/shared';
import {SectionSeparator, FADE_DURATION} from '../../styles/shared';
import {
    BlogTopAnchor,
    BlogWrapper,
    MainPageBlogBio,
    BlogSectionHeading,
    BlogTitle
} from '../../styles/blog';
import {BLOG_CATEGORIES, BLOG_NOTES, WEBSITE_TEXT_BLOG} from './../../data/constants';
import CategoryPicker from './CategoryPicker/CategoryPicker';
import FilteredCategory from './FilteredCategory/FilteredCategory';
import SmallSpinner from '../UI/SmallSpinner/SmallSpinner';

const Teaser = lazy(() => import('./Teaser/Teaser'));
const BlogBio = lazy(() => import('./BlogBio/BlogBio'));
const SubpageLinks = lazy(() => import('../UI/SubpageLinks/SubpageLinks'));
const CopyrightNote = lazy(() => import('../UI/CopyrightNote/CopyrightNote'));
const BlogNoteList = lazy(() => import('./BlogNoteList/BlogNoteList'));

export const Blog = props => {

    //latest note to be displayed
    const [latestNote, setLatestNote] = useState('');

    // list of blog notes to be linked under the latest blog note
    const [olderNotes, setOlderNotes] = useState([]);

    //specifies the filtered category
    const [filteredCategory, setFilteredCagetory] = useState('');

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
    const setCurrentPage = page => {
        props.setPage(page);
    }

    //checks if the blog notes should be filtered by category
    const checkFiltering = () => {

        //get property names of the blog categories
        let blogCategories = Object.keys(BLOG_CATEGORIES);

        //check if the url contains the name of any category
        for (let category of blogCategories) {
            if (props.location.pathname.includes(category)) {
                // setIsFiltered(true); //turns on the filtered mode
                setFilteredCagetory(category); //sets the matching category as the one used for filtering
                return category;
            }
        }
        ;

        //if the url doesn't match any category, return false
        // setIsFiltered(false); //turns off the filtered mode
        setFilteredCagetory(''); //erases any filtered category
        return false
    }


    //filters blog notes by category
    const filterByCategory = category => {

        //an array to hold all notes matching the category
        let filteredNotes = [];


        for (let note of BLOG_NOTES) {
            //if the category of the note matches the selected category, add it to the array
            if (note.category === category) {
                filteredNotes.push(note);
            }
        }

        return filteredNotes;
    }

    //handles all operations related to category filtering
    const handleCategoryFiltering = () => {
        //if the url contains category name, filter blog notes by this category
        let categoryToFilter = checkFiltering();

        //filters out notes with the category in question
        let filteredByCategory = BLOG_NOTES.filter(item => {
            return (item.category === categoryToFilter)
        });
        console.log(filteredByCategory);

        if (categoryToFilter && filteredByCategory.length) {
            setLatestNote(filterByCategory(categoryToFilter)[0]); // sets the latest note
            setOlderNotes(removeFirstElement(filterByCategory(categoryToFilter))); // sets older notes
        } else {
            setLatestNote(BLOG_NOTES[0]); // sets the latest note
            setOlderNotes(removeFirstElement(BLOG_NOTES)); // sets older notes
            setFilteredCagetory(''); // resets filtered category
        }

    };

    //returns an an array without its first element
    const removeFirstElement = (array) => {
        let [, ...shortenedArray] = array;

        return shortenedArray;
    }

    useEffect(() => {
        //Update page title with the piece title
        document.title = WEBSITE_TEXT_BLOG.title;

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

        //check if category should be filtered and adjust state accordingly
        handleCategoryFiltering();

        //clean up state when unmounting
        return () => {
            setLatestNote('');
            setOlderNotes('');
            setFilteredCagetory('');
        }

    }, []);

    useEffect(() => {

        //reload page when url changes
        reloadPage();

        //check if category should be filtered and adjust state accordingly
        handleCategoryFiltering();

    }, [props.location.pathname])


    //do not show the content until the page is loaded
    return props.loaded &&
        <BlogWrapper>
            <BlogTopAnchor>
                <div id='top'></div>
            </BlogTopAnchor>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}
            >
                <BlogTitle>{WEBSITE_TEXT_BLOG.title}</BlogTitle>
            </AnimatedContent>
                <MainPageBlogBio>
                    <Suspense fallback={SmallSpinner}>
                        <AnimatedContent
                            pose={!props.reload ? 'visible' : 'hidden'}
                        >
                            <BlogBio/>
                        </AnimatedContent>
                    </Suspense>
                </MainPageBlogBio>
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}
            >
                {(filteredCategory === '') &&
                <CategoryPicker/>}
                {(filteredCategory) &&
                <FilteredCategory category={filteredCategory}/>}
            </AnimatedContent>
            <Suspense fallback={SmallSpinner}>
            {(latestNote.id) &&
                <AnimatedContent
                    pose={!props.reload ? 'visible' : 'hidden'}
                >
                    <BlogSectionHeading>{WEBSITE_TEXT_BLOG.latestPost}</BlogSectionHeading>

                    <Teaser note={latestNote}/>
                </AnimatedContent>
            }
            {
                (olderNotes.length > 0) &&
                <React.Fragment>
                    <AnimatedContent
                        pose={!props.reload ? 'visible' : 'hidden'}
                    >
                        <BlogSectionHeading>{WEBSITE_TEXT_BLOG.olderPosts}</BlogSectionHeading>
                    </AnimatedContent>
                        <BlogNoteList
                            linklist={olderNotes}
                            showCategories={!filteredCategory}
                        />
                </React.Fragment>
            }
                <AnimatedContent
                    pose={!props.reload ? 'visible' : 'hidden'}
                >
                    <SubpageLinks
                        lang={'en'}
                        reloadPage={reloadPage}
                        blog={filteredCategory}
                        mainHidden={!filteredCategory}
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);