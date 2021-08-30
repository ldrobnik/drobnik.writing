import React, {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Waypoint} from 'react-waypoint';
import {setPageReload} from '../../../actions';
import {BlogNoteListWrapper, FADE_DURATION} from '../../../styled';
import {AnimatedBlogNoteList, AnimatedBlogNoteLink} from '../../../animations/blog';
import BlogNoteListElement from './BlogNoteListElement/BlogNoteListElement';


export const BlogNoteList = props => {

    //specifies whether text links should be visible
    const [linksVisible, setLinksVisible] = useState(false);

    //shows the content
    const showContent = () => {
        props.setPageReload(false);
    };

    //shows the text links
    const showLinks = () => {
        setLinksVisible(true);
    };

    //hides the text links
    const hideLinks = () => {
        setLinksVisible(false);
    };


    //hide message whenever the pathname changes
    useEffect(() => {
            setTimeout(() => {
                hideLinks();
            }, 100);
        },
        [props.location.pathname]
    );

    useEffect(() => {

        //show content after a while
        setTimeout(showContent, FADE_DURATION);
    });

    return (
        <BlogNoteListWrapper>
            <Waypoint
                onEnter={showLinks}
            />
            <AnimatedBlogNoteList
                pose={linksVisible ? 'visible' : 'hidden'}>
                {props.linklist.map((link, k) => {
                    return (
                        <AnimatedBlogNoteLink
                            pose={linksVisible ? 'visible' : 'hidden'}
                            key={k}>
                            <BlogNoteListElement
                                id={link.id}
                                title={link.title}
                                category={link.category}
                                linksVisible={linksVisible}
                                onClick={setPageReload()}
                                showCategories={props.showCategories}
                            />
                        </AnimatedBlogNoteLink>
                    )
                })}
            </AnimatedBlogNoteList>
            <Waypoint
                onEnter={showLinks}
            />
        </BlogNoteListWrapper>
    );
};

const mapStateToProps = state => {
    return {
        lang: state.language,
        reload: state.pageReload
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogNoteList));