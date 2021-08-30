/* POSED COMPONENTS */

import posed from 'react-pose';



/* Text.js */

export const AnimatedTextLink = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        delay: 200,
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

export const AnimatedTextButton = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

/* CentredPhoto.js */

export const AnimatedPhoto = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            ease: 'easeInOut',
            duration: 200
        }
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

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
