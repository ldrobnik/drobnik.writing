/* POSED COMPONENTS */

import posed from 'react-pose';




/* QuoteList.js */

export const AnimatedQuoteList = posed.div({
    visible: {
        delayChildren: 200,
        staggerChildren: 400
    }
});

export const AnimatedQuote = posed.div({
    visible: {
        y: '0%',
        opacity: 1,
        transition: {
            ease: 'easeOut',
            duration: 1500
        }
    },
    hidden: {
        y: '50%',
        opacity: 0,
        transition: {
            duration: 2000
        }
    }
});

/* Read.js */

export const AnimatedReadList = posed.div({
    visible: {
        delayChildren: 400,
        staggerChildren: 150
    }
});

export const AnimatedReadLink = posed.div({
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

export const AnimatedReadButton = posed.div({
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
