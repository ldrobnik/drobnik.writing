import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    BlogNoteListElementWrapper,
    BlogNoteListElementContent,
    BlogNoteListElementTitle,
    BlogNoteListElementSubtitle,
    BlogNoteListElementLine
} from '../../../../styled';
import {setPageReload} from '../../../../actions';
import {BLOG_CATEGORIES, WEBSITE_TEXT} from '../../../../data/constants';

const BlogNoteListElement = (props) => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    return (


        <BlogNoteListElementWrapper>
            <BlogNoteListElementLine/>
            <BlogNoteListElementContent>
                <Link
                    to={`/blog/notes/${props.id}`}
                    onClick={reloadPage}
                >
                    <BlogNoteListElementTitle>
                        {props.title}
                    </BlogNoteListElementTitle>
                </Link>
                <Link
                    to={`/blog/${props.category}`}
                    onClick={reloadPage}
                >
                    <BlogNoteListElementSubtitle>
                        {BLOG_CATEGORIES[props.category]}
                    </BlogNoteListElementSubtitle>
                </Link>
            </BlogNoteListElementContent>
            <BlogNoteListElementLine/>
        </BlogNoteListElementWrapper>


    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(BlogNoteListElement);