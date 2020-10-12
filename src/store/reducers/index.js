import { combineReducers } from 'redux';
import order from './order';
import loader from './loader';

export default combineReducers({
    loader,
    order
});