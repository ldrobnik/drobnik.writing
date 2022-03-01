import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Markdown from 'markdown-to-jsx/dist/index.js';
import {HighlightedMarkdown} from '../highlighted-markdown';
import {AnimatedContent} from '../../../animations/shared';
import {BlogBigSeparator, BlogPost, BlogSeparator, TeaserWrapper} from '../../../styles/blog';
import {SmallSeparator, BigSeparator} from "../../../styles/shared";
import BlogNoteCredits from '../BlogNoteCredits/BlogNoteCredits';
import ThemeWrapper from '../../ThemeWrapper/ThemeWrapper';
import BlogImage from '../BlogNote/BlogImage/BlogImage';
import SmallSpinner from '../../UI/SmallSpinner/SmallSpinner';
import {setPageReload} from '../../../actions';

export const Teaser = props => {

    //blognote to be displayed
    const [note, setNote] = useState('');

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    useEffect(() => {

        //imports markdown documents and coverts it into text
        import(`./../../../data/blognotes/${props.note.id}.md`)
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
        <Link
            to={`/blog/${props.note.id}`}
            onClick={reloadPage}
        >
            <TeaserWrapper>
                <AnimatedContent
                    pose={!props.reload && note.length > 20 ? 'visible' : 'hidden'}>
                    <ThemeWrapper theme={props.note.category}>
                        <BlogNoteCredits
                            teaser={true}
                            title={props.note.title}
                            category={props.note.category}
                            date={props.note.date}
                        />

                        <BlogPost>
                            <HighlightedMarkdown>
                                <Markdown
                                    options={{
                                        overrides: {
                                            a: {
                                                component: 'strong',
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
                                            smallSeparator: {
                                                component: BlogSeparator,
                                                props: {
                                                    className: 'colouredBackground'
                                                }
                                            },
                                            bigSeparator: {
                                                component: BlogBigSeparator,
                                                props: {
                                                    className: 'colouredBackground'
                                                }
                                            }
                                        }
                                    }}
                                >
                                    {note}
                                </Markdown>
                            </HighlightedMarkdown>
                        </BlogPost>
                    </ThemeWrapper>
                </AnimatedContent>
                {!note.length && <SmallSpinner/>}
            </TeaserWrapper>
        </Link>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(Teaser);