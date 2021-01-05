import { combineReducers } from 'redux';
import socket from './Socket/reducer';

const appReducer = combineReducers({
    socket
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;