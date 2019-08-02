import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 2em;
`;

const Photo = styled.div`
  height: 12em;
  opacity: ${props => props.theme.translucent};
    img {
      height: 100%;
    }
`;

const CentredPhoto = (props) => {

    return (
        <Wrapper>
            <Photo>
                <img
                    src={props.source}
                    alt={props.altText}
                    />
            </Photo>
        </Wrapper>
    );
};

export default CentredPhoto;