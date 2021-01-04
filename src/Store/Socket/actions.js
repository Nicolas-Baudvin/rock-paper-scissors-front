export const CONNECTION_TO_SOCKET = "CONNECTION_TO_SOCKET";
export const CREATE_NEW_ROOM = "CREATE_NEW_ROOM";
export const JOIN_ROOM = "JOIN_ROOM";
export const LOG_OUT = "LOG_OUT";
export const REFRESH_ROOM_STATUS = "REFRESH_ROOM_STATUS";
export const THROW_SOCKET_ERROR = "THROW_ERROR";
export const SEND_SHOT_TYPE = "SEND_SHOT_TYPE";
export const NEW_WINNER = "NEW_WINNER";
export const PLAY_AGAIN = "PLAY_AGAIN";

export const playAgain = () => ({
    type: PLAY_AGAIN
});

export const newWinner = (winner) => ({
    type: NEW_WINNER,
    winner
});

export const sendShotType = (shotType) => ({
    type: SEND_SHOT_TYPE,
    shotType
});

export const throwSocketError = (error) => ({
    type: THROW_SOCKET_ERROR,
    error
});

export const refreshRoomStatus = (room) => ({
    type: REFRESH_ROOM_STATUS,
    room
});

export const logOut = () => ({
    type: LOG_OUT
});

export const joinRoom = (roomName) => ({
    type: JOIN_ROOM,
    roomName
});

export const createNewRoom = (roomName) => ({
    type: CREATE_NEW_ROOM,
    roomName
});

export const connectionToSocket = () => ({
    type: CONNECTION_TO_SOCKET
});