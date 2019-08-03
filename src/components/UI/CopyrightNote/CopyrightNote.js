import React from 'react';
import styled from 'styled-components';

const Note = styled.div`
  margin: 1em 0;
  font-size: ${props => props.theme.smallCaptionSize};
  text-align: center;
`;

const CopyrightNote = () => {

    return (
        <Note>
            &copy;&nbsp;Łukasz Drobnik 2019
        </Note>
    );
};

export default CopyrightNote;