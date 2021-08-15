import React, {useState, useEffect} from 'react';
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
} from '../../actions';
import {AnimatedContent} from '../../posed';
import {BlogTopAnchor, BlogPost, BlogWrapper, FADE_DURATION} from '../../styled';
import {BLOG_CATEGORIES, BLOG_NOTES, TEXT_NAMES, TEXTS, WEBSITE_TEXT} from './../../data/constants';
import ThemeWrapper from './ThemeWrapper/ThemeWrapper';
import SectionSeparator from '../UI/SectionSeparator/SectionSeparator';
import InvisibleSeparator from '../UI/InvisibleSeparator/InvisibleSeparator';
import SubpageLinks from '../UI/SubpageLinks/SubpageLinks';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';
import BlogNoteList from './BlogNoteList/BlogNoteList';
import {BlogNoteReadMore, BlogSeparator} from '../../../styled';
import BlogBio from '../BlogNote/BlogBio/BlogBio';

export const Teaser = props => {

    //blognote to be displayed
    const [note, setNote] = useState('');

    useEffect(() => {
        //imports markdown documents and coverts it into text
        import(`./../../data/blognotes/${props.noteId}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setNote(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    });

    //do not show the content until the page is loaded
    return (
            <AnimatedContent
                pose={!props.reload ? 'visible' : 'hidden'}>
                <ThemeWrapper theme={'writing'}>
                    <BlogPost>
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
                                    },
                                }}
                            >
                                {note}
                            </Markdown>
                        </HighlightedMarkdown>
                    </BlogPost>
                </ThemeWrapper>
            </AnimatedContent>);
};

export default Teaser;