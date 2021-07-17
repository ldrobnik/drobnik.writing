import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {setPageReload} from '../../../actions';
import {CentredButtonOuterWrapper, CentredButtonButtonWrapper} from '../../../styled';

export const CentredButton = (props) => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    //constant holding the button content
    const buttonMessage = props.message;

    //the content of the button
    const buttonContent = (
        <CentredButtonButtonWrapper>
            {buttonMessage}
        </CentredButtonButtonWrapper>
    );


    return (
        <CentredButtonOuterWrapper>
            {(props.path[0] === '/') ?
                <Link
                    to={props.path}
                    onClick={reloadPage}>
                    {buttonContent}
                </Link> :
                <a
                    href={props.path}
                    target="_blank"
                    rel="noopener noreferrer">
                    {buttonContent}
                </a>
            }
        </CentredButtonOuterWrapper>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(CentredButton);