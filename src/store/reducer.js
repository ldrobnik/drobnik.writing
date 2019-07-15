import * as actionTypes from './actions';

const initialState = {
    language: 'en',
    theme: 'default',
    blackAndWhite: false
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
                theme: action.blackAndWhite
            };
        default:
            return state;
    }
};

export default reducer;