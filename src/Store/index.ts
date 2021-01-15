import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./reducer";

/**
 * Middlewares
 */
import SocketMiddleware from "./Socket/middleware";
import OfflineMiddleware from "./OfflineGame/middleware";

const middlewares = applyMiddleware(SocketMiddleware, OfflineMiddleware);

const withReduxDevTools = compose;

const reactModelStore = createStore(
  rootReducer,
  process.env.NODE_ENV === "development"
    ? withReduxDevTools(middlewares)
    : middlewares
);

export default reactModelStore;
