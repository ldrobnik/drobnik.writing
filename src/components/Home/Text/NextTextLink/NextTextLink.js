import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const UpNext = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.theme.bodySize}
  user-select: none;
  margin: 1em 0;
`;

const NextTextLink = (props) => {

    return (
        <UpNext>
            {props.link}
        </UpNext>
    );
};

export default NextTextLink;