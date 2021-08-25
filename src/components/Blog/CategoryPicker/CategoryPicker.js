import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {AnimatedContent} from '../../../posed';
import {CategoryPickerWrapper} from '../../../styled';
import ThemeWrapper from '../ThemeWrapper/ThemeWrapper';
import {setPageReload} from '../../../actions';
import {BLOG_NOTES, BLOG_CATEGORIES} from '../../../data/constants';

export const CategoryPicker = props => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //checks which categories are active, and returns an array of category buttons
    const checkActiveCategories = () => {
        //array holding all category buttons
        let categoryBtns = [];

        //loop through categories and see if there are any notes in a given category
        for (const category of Object.keys(BLOG_CATEGORIES)) {
            console.log(category);
        }
    }


    //do not show the content until the page is loaded
    return (
        <AnimatedContent
            pose={!props.reload ? 'visible' : 'hidden'}>
            <CategoryPickerWrapper>

            </CategoryPickerWrapper>
        </AnimatedContent>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(CategoryPicker);