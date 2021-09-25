import posed from 'react-pose';

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

/* ReadList.js */

export const AnimatedReadList = posed.div({
    visible: {
        delayChildren: 400,
        staggerChildren: 150
    }
});

export const AnimatedReadLink = posed.div({
    visible: {
        x: '0',
        transition: {
            type: 'spring',
            stiffness: 100
        },
    },
    hidden: {
        x: '1500px',
    }
});