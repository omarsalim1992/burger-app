import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default {
    ...createStoreWithMiddleware(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
};
