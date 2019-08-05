import React, {useState} from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import * as actionTypes from "../../../store/actions";

const Wrapper = styled.div`
  text-align: center;
  padding: 2em;
  position: relative; 
`;

const Photo = styled.div`
  height: 12em;
  opacity: ${props => props.theme.translucent};
  z-index: 60;
    img {
      height: 100%;
    }
`;

const Capital = styled.div`
  font-family: ${props => props.theme.cursive};
  font-size: 24em;
  text-transform: uppercase;
  opacity: ${props => props.theme.transparent};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur( ${props => props.theme.heavyBlur});
  user-select: none;
`;

/* POSE */
const PicWrapper = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});


const CentredPhoto = (props) => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [visible, setVisible] = useState(false);

    //sets photo visibility to true
    const showPhoto = () => {
      setVisible(true);
    };

    return (
        <Wrapper>
            <PicWrapper
                pose={visible ? 'visible' : 'hidden'}>
                <Photo>
                    <img
                        src={props.source}
                        alt={props.altText}
                        onLoad={showPhoto}
                    />
                </Photo>
                <Capital>
                    {props.capital}
                </Capital>
            </PicWrapper>
        </Wrapper>
    );
};


export default CentredPhoto;