import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';

/**
 * Middlewares
 */
import SocketMiddleware from './Socket/middleware';

const middlewares = applyMiddleware(SocketMiddleware);

const withReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reactModelStore = createStore(
    reducers,
    process.env.NODE_ENV === "development" ? withReduxDevTools(middlewares) : middlewares
);

export default reactModelStore;