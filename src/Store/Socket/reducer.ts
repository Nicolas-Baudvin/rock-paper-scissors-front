import {
  CLEAR_ERROR,
  CONNECTION_TO_SOCKET,
  CREATE_NEW_ROOM,
  JOIN_ROOM,
  LOG_OUT,
  NEW_SOCKET,
  NEW_WINNER,
  REFRESH_ROOM_STATUS,
  THROW_SOCKET_ERROR,
} from "./actions";
import { getRoomFromLocalStorage } from "../../Utils";
import { SocketActions, SocketState } from "./types";

const initialState: SocketState = {
  id: "",
  username: "",
  isLoading: false,
  currentSocket: null,
  shotType: "",
  room: getRoomFromLocalStorage("room"),
  error: "",
  showError: false,
};

const userReducer = (
  state = initialState,
  action: SocketActions
): SocketState => {
  switch (action.type) {
    case LOG_OUT: {
      return {
        ...initialState,
        room: null,
      };
    }
    case NEW_WINNER: {
      return {
        ...state,
        winner: action.winner,
      };
    }
    case CONNECTION_TO_SOCKET: {
      return {
        ...state,
        connected: true
      };
    }
    case REFRESH_ROOM_STATUS: {
      return {
        ...state,
        room: action.room,
      };
    }
    case THROW_SOCKET_ERROR: {
      return {
        ...state,
        error: action.error,
        showError: true,
      };
    }
    case CLEAR_ERROR: {
      return {
        ...state,
        showError: false,
      };
    }
    case NEW_SOCKET: {
      return {
        ...state,
        currentSocket: action.socket,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
