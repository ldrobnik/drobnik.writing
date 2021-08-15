import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Markdown from 'markdown-to-jsx/dist/index.js';
import {HighlightedMarkdown} from '../highlighted-markdown';
import {AnimatedContent} from '../../../posed';
import {BlogPost, TeaserWrapper} from '../../../styled';
import ThemeWrapper from '../ThemeWrapper/ThemeWrapper';

export const Teaser = props => {

    //blognote to be displayed
    const [note, setNote] = useState('');

    useEffect(() => {
        console.log(props.note)

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
        <Link to={`/blog/notes/${props.note.id}`}>
            <TeaserWrapper>
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
                </AnimatedContent>
            </TeaserWrapper>
        </Link>
    );
};

export default Teaser;