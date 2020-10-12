// import * as actionTypes from '../actions/types';
import {sessionStorageKeys} from '../config';

const initState = () => {
    if(sessionStorage.getItem(sessionStorageKeys.order)) {
        return {...JSON.parse(sessionStorage.getItem(sessionStorageKeys.order))};
    }
    return {};
};

const setOrder = () => {
    const order = {
        orderID: 'fdfdfd',
        time: '10:30'
    }
    sessionStorage.setItem(sessionStorageKeys.order, JSON.stringify(order));
    return order;
}

export default (state = initState(), action) => {
    return setOrder();
};