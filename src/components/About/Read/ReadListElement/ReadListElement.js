import React from 'react';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    ReadListElementWrapper,
    ReadListElementContent,
    ReadListElementTitle,
    ReadListElementSubtitle,
    ReadListElementLine
} from '../../../../styled';
import {setPageReload} from '../../../../actions';

const ReadListElement = props => {

    //sets off page reloading animation
    const reloadPage = () => {
        props.setPageReload(true);
    };

    return (

        <Link
            to={props.path}
            onClick={reloadPage}
        >
            <ReadListElementWrapper>
                <ReadListElementLine/>
                <ReadListElementContent>
                    <ReadListElementTitle className={'coloured'}>
                        {props.title}
                    </ReadListElementTitle>
                    <ReadListElementSubtitle className={'coloured'}>
                        {props.subtitle}
                    </ReadListElementSubtitle>
                </ReadListElementContent>
                <ReadListElementLine/>
            </ReadListElementWrapper>
        </Link>


    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageReload}, dispatch);
};

export default connect(null, mapDispatchToProps)(ReadListElement);