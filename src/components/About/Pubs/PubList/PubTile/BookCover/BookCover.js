import React, {useState} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

/*STYLED COMPONENTS*/
const Wrapper = styled.div`
  text-align: center;
  padding: 0.5em;
  position: relative; 
`;

const Photo = styled.div`
  height: 5em;
  opacity: ${props => props.theme.slightlyTranslucent};
  z-index: 60;
  
  img {
      height: 100%;
  }
`;

/* POSE */
const AnimatedPic = posed.div({
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

const BookCover = (props) => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //sets photo visibility to true
    const showPhoto = () => {
        setVisible(true);
    };

    return (
        <Wrapper>
            <AnimatedPic
                pose={visible ? 'visible' : 'hidden'}>
                <Photo>
                    <img
                        src={props.source}
                        alt={props.altText}
                        onLoad={showPhoto}
                    />
                </Photo>
            </AnimatedPic>
        </Wrapper>
    );
};

export default BookCover;