import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    BlogNoteListElementWrapper,
    BlogNoteListElementContent,
    BlogNoteListElementTitle,
    BlogNoteListElementSubtitle,
    BlogNoteListElementSeparator
} from '../../../../styled';
import {setPageReload} from '../../../../actions';
import {BLOG_CATEGORIES, WEBSITE_TEXT} from '../../../../data/constants';
import ThemeWrapper from '../../ThemeWrapper/ThemeWrapper';

const BlogNoteListElement = (props) => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    return (

        <ThemeWrapper theme={props.category}>
            <BlogNoteListElementWrapper>
                <BlogNoteListElementContent>
                    <Link
                        to={`/blog/notes/${props.id}`}
                        onClick={reloadPage}
                    >
                        <BlogNoteListElementTitle>
                            {props.title}
                        </BlogNoteListElementTitle>
                    </Link>
                    <BlogNoteListElementSeparator className={'colouredBackground'}/>
                    {props.showCategories && <Link
                        to={`/blog/${props.category}`}
                        onClick={reloadPage}
                    >
                        <BlogNoteListElementSubtitle>
                            {BLOG_CATEGORIES[props.category]}
                        </BlogNoteListElementSubtitle>
                    </Link>}
                </BlogNoteListElementContent>
            </BlogNoteListElementWrapper>
        </ThemeWrapper>

    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(BlogNoteListElement);