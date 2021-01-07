import { CONNECTION_TO_SOCKET, CREATE_NEW_ROOM, JOIN_ROOM, LOG_OUT, NEW_WINNER, REFRESH_ROOM_STATUS } from "./actions";
import { getObjectFromLocalStorage } from '../../Utils';

const initialState = {
    id: "",
    username: "",
    isLoading: false,
    currentSocket: null,
    shotType: "",
    room: getObjectFromLocalStorage("room")
};


const userReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case LOG_OUT: {
            return {
                ...initialState,
                room: null
            };
        }
        case NEW_WINNER: {
            return {
                ...state,
                winner: action.winner
            }
        }
        case CONNECTION_TO_SOCKET: {
            return {
                ...state,
                currentSocket: action.socket
            };
        }
        case REFRESH_ROOM_STATUS: {
            return {
                ...state,
                room: action.room
            };
        }
        case JOIN_ROOM: {
            return {
                ...state,
                room: action.room
            };
        }
        case CREATE_NEW_ROOM: {
            return {
                ...state,
                room: action.room
            };
        }
        default:
            return state;
    }
};

export default userReducer;