/* POSED COMPONENTS */

import posed from 'react-pose';

/* General */

export const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0px)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

/* Book.js */

export const BookAnimatedButton = posed.div({
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

/* Intro.js */

export const IntroAnimatedLinks = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        transition: {
            type: 'spring',
            stiffness: 80
        }
    },
    hidden: {
        opacity: 0,
        transform: 'scale(0,0)'
    }
});

export const IntroAnimatedButton = posed.div({
    visible: {
        opacity: 1,
        transform: 'scale(1,1)',
        delay: 100,
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

/* Pubs.js */

export const PubsAnimatedMessage = posed.div({
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        x: '-200%'
    }
});

export const PubsAnimatedPanel = posed.div({
    visible: {
        opacity: 1,
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        opacity: 0,
        x: '200%'
    }
});