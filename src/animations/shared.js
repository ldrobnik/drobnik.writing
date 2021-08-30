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