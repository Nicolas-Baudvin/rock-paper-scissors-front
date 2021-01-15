import { combineReducers } from "redux";

import socket from "./Socket/reducer";
import offline from "./OfflineGame/reducer";

export const rootReducer = combineReducers({
  socket,
  offline,
});

export type RootState = ReturnType<typeof rootReducer>;
