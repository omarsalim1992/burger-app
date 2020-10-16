import * as actionTypes from '../actions/types';
import { sessionStorageKeys } from '../config';

const initState = () => {
    if (sessionStorage.getItem(sessionStorageKeys.orders)) {
        return { ...JSON.parse(sessionStorage.getItem(sessionStorageKeys.orders)) };
    }
    return {};
};

const setLatestOrder = (state, responseData) => {
    const updatedOrders = {
        ...state,
        latest: { ...responseData }
    };
    sessionStorage.setItem(sessionStorageKeys.orders, JSON.stringify(updatedOrders));
    return updatedOrders;
}

const storeAllOrders = (state, responseData) => {
    const updatedOrders = {
        ...state,
        all: responseData && responseData.length ? responseData : []
    }
    sessionStorage.setItem(sessionStorageKeys.orders, JSON.stringify(updatedOrders));
    return updatedOrders;
};

export default (state = initState(), action) => {
    const { data = {} } = action;
    switch (action.type) {
        case actionTypes.SET_ORDER_DEDAILS:
            return setLatestOrder(state, data);
        case actionTypes.GET_ALL_ORDER_DEDAILS:
            return storeAllOrders(state, data);
        default:
            return state;
    };
};