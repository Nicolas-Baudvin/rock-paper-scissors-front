export const CONNECTION_TO_SOCKET = "CONNECTION_TO_SOCKET";
export const CREATE_NEW_ROOM = "CREATE_NEW_ROOM";

export const createNewRoom = (roomName) => ({
    type: CREATE_NEW_ROOM,
    roomName
});

export const connectionToSocket = () => ({
    type: CONNECTION_TO_SOCKET
});