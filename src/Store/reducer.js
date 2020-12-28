import { combineReducers } from 'redux';
import socket from './Socket/reducer';

const appReducer = combineReducers({
    socket
});

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT")
    {
        state = {};
    }
    return appReducer(state, action);
};

export default rootReducer;