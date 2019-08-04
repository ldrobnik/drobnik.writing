import * as actionTypes from './actions';

const initialState = {
    language: 'en',
    theme: 'nocturine',
    blackAndWhite: false,
    currentText: '',
    navbarVisible: false,
    dataNoticeAccepted: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.language
            };
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: action.theme
            };
        case actionTypes.SET_BW_MODE:
            return {
                ...state,
                blackAndWhite: action.blackAndWhite
            };
        case actionTypes.SET_CURRENT_TEXT:
            return {
                ...state,
                currentText: action.currentText
            };
        case actionTypes.SET_NAVBAR_VISIBILITY:
            return {
                ...state,
                navbarVisible: action.navbarVisible
            };
        case actionTypes.SET_DATA_NOTICE_ACCEPTED:
            return {
                ...state,
                dataNoticeAccepted: action.dataNoticeAccepted
            }
        default:
            return state;
    }
};

export default reducer;