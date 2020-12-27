import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { createLogger } from 'redux-logger';


const logger = createLogger();
const Middleware = [thunk];
const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...Middleware, logger),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
