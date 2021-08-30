import React from 'react';
import {CopyNote} from '../../../styles/shared';
import {WEBSITE_TEXT} from '../../../data/constants';

const CopyrightNote = () => {
    return (
        <CopyNote>
            {WEBSITE_TEXT.copyright}
        </CopyNote>
    );
};

export default CopyrightNote;