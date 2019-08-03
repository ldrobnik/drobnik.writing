import * as actionTypes from './actions';

const initialState = {
    language: 'en',
    theme: 'nocturine',
    blackAndWhite: false,
    currentText: '',
    loading: true
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
        case actionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state;
    }
};

export default reducer;