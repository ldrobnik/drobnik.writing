import posed from 'react-pose';

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

/* PubList */

export const PubAnimatedTile = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0)',
        transform: 'skew(0, 0)',
        transition: {
            ease: 'easeOut',
            duration: 200
        }
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)',
        transform: 'skew(5deg, 10deg)',
        transition: {duration: 200}
    }
});

/* BookCover.js */

export const BookCoverAnimatedPic = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            ease: 'easeInOut',
            duration: 200 }
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

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
