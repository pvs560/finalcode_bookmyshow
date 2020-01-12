import rootReducer from '../reducers/MovieReducer';
import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';

    const logger = createLogger();
    const middleware = applyMiddleware(thunk, logger);
    const storeEnhancers = compose(
     middleware
    );
    const initialState = {};

    export default createStore (
      rootReducer,
      initialState,
      storeEnhancers
    );
