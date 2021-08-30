/* POSED COMPONENTS */

import posed from 'react-pose';

/* BlogNoteList.js */

export const AnimatedBlogNoteList = posed.div({
    visible: {
        delayChildren: 400,
        staggerChildren: 150
    }
});

export const AnimatedBlogNoteLink = posed.div({
    visible: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        x: '300%'
    }
});
