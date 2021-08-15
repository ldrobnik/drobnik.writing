import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Markdown from 'markdown-to-jsx/dist/index.js';
import {HighlightedMarkdown} from '../highlighted-markdown';
import {AnimatedContent} from '../../../posed';
import {BlogPost, TeaserWrapper} from '../../../styled';
import ThemeWrapper from '../ThemeWrapper/ThemeWrapper';
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
            to={`/blog/notes/${props.note.id}`}
            onClick={reloadPage}
        >
            <TeaserWrapper>
                <AnimatedContent
                    pose={!props.reload ? 'visible' : 'hidden'}>
                    <ThemeWrapper theme={props.note.category}>
                        <BlogPost>
                            <HighlightedMarkdown>
                                <Markdown
                                    options={{
                                        overrides: {
                                            a: {
                                                component: 'strong',
                                            },
                                        },
                                    }}
                                >
                                    {note}
                                </Markdown>
                            </HighlightedMarkdown>
                        </BlogPost>
                    </ThemeWrapper>
                </AnimatedContent>
            </TeaserWrapper>
        </Link>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(Teaser);