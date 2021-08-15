import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import moment from 'moment';
import {AnimatedContent} from '../../../posed';
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
    const [day, month, year] = props.note.date;

    //formatted date
    const datePublished = moment(`${day}  ${month}  ${year}`).format('Do MMM YYYY');

    //show different content depending on whether the title is used in the teaser or in the actual note
    if (props.teaser) {
        return (
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <BlogNoteTeaserTitle>{props.note.title}</BlogNoteTeaserTitle>
                <BlogNoteCategory>
                    <strong>{BLOG_CATEGORIES[props.note.category]}</strong>
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
                <BlogNoteTitle>{props.note.title}</BlogNoteTitle>
                <Link
                    to={`/blog/${props.note.category}`}
                    onClick={reloadPage}
                >
                    <BlogNoteCategory>
                        <strong>{BLOG_CATEGORIES[props.note.category]}</strong>
                    </BlogNoteCategory>
                </Link>
                <BlogNoteCreditWrapper>
                    <AnchorLink href='#bio'>
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