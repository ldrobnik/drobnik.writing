import React, { useRef, useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';


export const HighlightedMarkdown = props => {
    const rootRef = useRef(null);

    useEffect(() => {
        rootRef.current.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
            console.log(block);
        });
    }, [props.children]);

    return (
        <div ref={rootRef}>
                {props.children}
        </div>
    );
}