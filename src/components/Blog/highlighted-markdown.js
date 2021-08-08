import React, { useRef, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';


const HighlightedMarkdown = props => {
    const rootRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        rootRef.current.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }, [props.children]);

    return (
        <div ref={rootRef}>
            <Markdown>{props.children}</Markdown>
        </div>
    );
}

export default HighlightedMarkdown;