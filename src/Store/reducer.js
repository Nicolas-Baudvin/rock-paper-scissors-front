import { combineReducers } from 'redux';

import socket from './Socket/reducer';
import offline from './OfflineGame/reducer';

const appReducer = combineReducers({
    socket,
    offline
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;