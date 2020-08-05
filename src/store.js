import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {rootReducer} from './reducers';

const middleware = [logger];
const appliedMiddlewares = applyMiddleware(...middleware);
export const store = createStore(rootReducer, appliedMiddlewares);
