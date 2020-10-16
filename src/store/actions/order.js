import * as actionTypes from './types';
import axios from 'axios';
import { microServiceApi } from '../config';

const generateConfig = () => {
    return {
        headers: {
            ...microServiceApi.headers
        }
    };
};

export const createOrder = (payload = {}) => {
    const config = generateConfig();

    return (dispatch) => {
        dispatch({ type: actionTypes.START_LOADING });
        return axios.post(microServiceApi.url, payload, config).then(res => {
            console.log("resssssss::", res);
            const { data = {} } = res;
            const { responseData = {} } = data;
            dispatch({
                type: actionTypes.SET_ORDER_DEDAILS,
                data: responseData
            });
            dispatch({ type: actionTypes.FINISH_LOADING });
            return res.data;
        }).catch(err => {
            console.log("POST-REQ::error::", err);
            dispatch({ type: actionTypes.FINISH_LOADING });
        });
    };
}

export const getAllOrders = () => {
    const config = generateConfig();
    return (dispatch) => {
        dispatch({ type: actionTypes.START_LOADING });
        return axios.get(microServiceApi.url, config).then(res => {
            const { data = {} } = res;
            const { responseData = {} } = data;
            console.log("responseData::", responseData);
            dispatch({
                type: actionTypes.GET_ALL_ORDER_DEDAILS,
                data: responseData
            });
            dispatch({ type: actionTypes.FINISH_LOADING });
        }).catch(err => {
            console.log("POST-REQ::error::", err);
            dispatch({ type: actionTypes.FINISH_LOADING });
        });
    };
};