import { combineReducers } from 'redux';
import orders from './order';
import loader from './loader';

export default combineReducers({
    loader,
    orders
});