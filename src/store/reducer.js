import * as actionTypes from './actions';
import {declareExportAllDeclaration} from "@babel/types";

const initialState = {
    language: 'en',
    theme: 'nocturine'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_LANGUAGE:
            return action.language;
        case actionTypes.SET_THEME:
            return action.theme;
        default:
            return state;
    }

};

export default reducer;