import React from 'react';
import {Note} from '../../../styled';
import {WEBSITE_TEXT} from '../../../data/constants';

const CopyrightNote = () => {
    return (
        <Note>
            {WEBSITE_TEXT.copyright}
        </Note>
    );
};

export default CopyrightNote;