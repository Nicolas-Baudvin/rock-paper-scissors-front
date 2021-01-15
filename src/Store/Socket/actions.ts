import { Room, SocketActions } from "./types";

export const CONNECTION_TO_SOCKET = "socket/CONNECTION_TO_SOCKET";
export const CREATE_NEW_ROOM = "socket/CREATE_NEW_ROOM";
export const JOIN_ROOM = "socket/JOIN_ROOM";
export const LOG_OUT = "socket/LOG_OUT";
export const REFRESH_ROOM_STATUS = "socket/REFRESH_ROOM_STATUS";
export const THROW_SOCKET_ERROR = "socket/THROW_ERROR";
export const SEND_SHOT_TYPE = "socket/SEND_SHOT_TYPE";
export const NEW_WINNER = "socket/NEW_WINNER";
export const PLAY_AGAIN = "socket/PLAY_AGAIN";
export const CLEAR_ERROR = "socket/CLEAR_ERROR";

export const clearError = (): SocketActions => ({
    type: CLEAR_ERROR
});

export const playAgain = (): SocketActions => ({
    type: PLAY_AGAIN
});

export const newWinner = (winner: string): SocketActions => ({
    type: NEW_WINNER,
    winner
});

export const sendShotType = (shotType: string): SocketActions => ({
    type: SEND_SHOT_TYPE,
    shotType
});

export const throwSocketError = (error: string): SocketActions => ({
    type: THROW_SOCKET_ERROR,
    error
});

export const refreshRoomStatus = (room: Room): SocketActions => ({
    type: REFRESH_ROOM_STATUS,
    room
});

export const logOut = (): SocketActions => ({
    type: LOG_OUT
});

export const joinRoom = (roomName: string): SocketActions => ({
    type: JOIN_ROOM,
    room: null,
    roomName
});

export const createNewRoom = (roomName: string): SocketActions => ({
    type: CREATE_NEW_ROOM,
    roomName,
    room: null
});

export const connectionToSocket = (): SocketActions => ({
    type: CONNECTION_TO_SOCKET,
    socket: null
});