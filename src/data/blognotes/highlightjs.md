```jsx
import React, { useRef, useEffect } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

interface HighlightedMarkdownProps {
children: string;
}

export function HighlightedMarkdown({ children }: HighlightedMarkdownProps) {
const rootRef = useRef<HTMLDivElement>();

useEffect(() => {
rootRef.current.querySelectorAll('pre code').forEach((block) => {
hljs.highlightBlock(block);
});
}, [children]);

return (
<div ref={rootRef}>
<Markdown>{children}</Markdown>
</div>
);
}
```

![The repository settings button](https://drobnik-test.netlify.app/assets/images/md-for-writers-typora.gif)

tsx is not yet supported by highlight.js [#1155](https://github.com/highlightjs/highlight.js/issues/1155)