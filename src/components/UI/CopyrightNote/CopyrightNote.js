import React from 'react';
import {CopyNote} from '../../../styles/shared';
import {WEBSITE_TEXT_SHARED} from '../../../data/constants';

const CopyrightNote = () => {
    return (
        <CopyNote>
            {WEBSITE_TEXT_SHARED.copyright}
        </CopyNote>
    );
};

export default CopyrightNote;