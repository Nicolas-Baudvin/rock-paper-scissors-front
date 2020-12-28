import { CONNECTION_TO_SOCKET, CREATE_NEW_ROOM } from "./actions";

const initialState = {
    id: "",
    username: "",
    isLoading: false,
    currentSocket: null,
    room: null
};


const userReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case CONNECTION_TO_SOCKET: {
            return {
                ...state,
                currentSocket: action.socket
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