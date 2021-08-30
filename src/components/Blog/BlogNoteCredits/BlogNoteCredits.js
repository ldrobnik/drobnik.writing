import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import moment from 'moment';
import {AnimatedContent} from '../../../animations/shared';
import {
    BlogNoteTeaserTitle,
    BlogNoteTitle,
    BlogNoteCategory,
    BlogNoteCreditWrapper,
    BlogNoteAuthor,
    BlogTeaserAuthor
} from '../../../styled';
import {setPageReload} from '../../../actions';
import {WEBSITE_TEXT, BLOG_CATEGORIES} from '../../../data/constants';

export const BlogNoteCredits = props => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //the day, month, and year of publication
    const [day, month, year] = props.date;

    //formatted date
    const datePublished = moment(`${day}  ${month}  ${year}`).format('Do MMMM YYYY');

    //show different content depending on whether the title is used in the teaser or in the actual note
    if (props.teaser) {
        return (
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <BlogNoteTeaserTitle>{props.title}</BlogNoteTeaserTitle>
                <BlogNoteCategory>
                    <strong>{BLOG_CATEGORIES[props.category]}</strong>
                </BlogNoteCategory>
                <BlogNoteCreditWrapper>
                    <BlogTeaserAuthor>{WEBSITE_TEXT.blog.author}</BlogTeaserAuthor>
                    <div>{datePublished}</div>
                </BlogNoteCreditWrapper>
            </AnimatedContent>
        );
    } else {
        return (
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <BlogNoteTitle>{props.title}</BlogNoteTitle>
                <Link
                    to={`/blog/${props.category}`}
                    onClick={reloadPage}
                >
                    <BlogNoteCategory>
                        <strong>{BLOG_CATEGORIES[props.category]}</strong>
                    </BlogNoteCategory>
                </Link>
                <BlogNoteCreditWrapper>
                    <AnchorLink offset='180' href='#bio'>
                        <BlogNoteAuthor>{WEBSITE_TEXT.blog.author}</BlogNoteAuthor>
                    </AnchorLink>
                    <div>{datePublished}</div>
                </BlogNoteCreditWrapper>
                <Link
                    to={`/blog/`}
                    onClick={reloadPage}
                >
                </Link>
            </AnimatedContent>
        );
    }

};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(BlogNoteCredits);