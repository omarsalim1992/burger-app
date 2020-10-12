import * as actionTypes from '../actions/types';

const initState = () => {
    return {
        isLoading: false,
    };
};


const startLoading = (state = {}) => {
    return {
        ...state,
        isLoading: true
    };
};

const finishLoading = (state = {}) => {
    return {
        ...state,
        isLoading: false
    };
};

export default (state = initState(), action) => {
    switch (action.type) {
        case actionTypes.START_LOADING:
            return startLoading(state);
        case actionTypes.FINISH_LOADING:
            return finishLoading(state);
        default:
            return state;
    };
};
