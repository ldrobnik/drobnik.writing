import React from 'react';
import styled from 'styled-components';

/*STYLED COMPONENTS*/
const Note = styled.div`
  margin: 1em 0;
  font-size: ${props => props.theme.smallCaptionSize};
  text-align: center;
`;

const CopyrightNote = () => {
    return (
        <Note>
            &copy;&nbsp;2020 Łukasz Drobnik
        </Note>
    );
};

export default CopyrightNote;