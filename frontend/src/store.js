import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import { localStorageMiddleware, promiseMiddleware } from './middleware';
import reducer from './reducer';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';

export const history = createBrowserHistory();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
	if (process.env.NODE_ENV === 'production') {
		return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware);
	} else {
		// Enable additional logging in non-production environments.
		return applyMiddleware(myRouterMiddleware, promiseMiddleware, localStorageMiddleware, createLogger());
	}
};

export const store = createStore(reducer, composeWithDevTools(getMiddleware()));
