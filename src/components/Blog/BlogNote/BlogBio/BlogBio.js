import React from 'react';
import {BlogBioWrapper} from '../../../../styled';
import {WEBSITE_TEXT} from '../../../../data/constants';

const BlogBio = props => {

    return (
        <BlogBioWrapper>
            {WEBSITE_TEXT.blog.bio}
        </BlogBioWrapper>
    );

};


export default BlogBio;