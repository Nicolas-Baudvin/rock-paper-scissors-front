import { clearError, CONNECTION_TO_SOCKET, CREATE_NEW_ROOM, JOIN_ROOM, LOG_OUT, newWinner, PLAY_AGAIN, refreshRoomStatus, REFRESH_ROOM_STATUS, SEND_SHOT_TYPE, throwSocketError, THROW_SOCKET_ERROR } from "./actions";
import io from 'socket.io-client';

let socket = null;
const Middleware = (store) => (next) => (action) => {
    switch (action.type)
    {
        case LOG_OUT: {
            if (socket !== null)
            {
                socket.emit("logout");
            }
            localStorage.clear();
            next(action);
            break;
        }
        case PLAY_AGAIN: {
            const { room } = store.getState().socket;
            socket.emit("play again", room.name);
            next(action);
            break;
        }
        case SEND_SHOT_TYPE: {
            const username = localStorage.getItem("user");
            const { shotType } = action;
            const roomName = store.getState().socket.room.name;

            socket.emit("send shot type", { shotType, username, roomName });
            next(action);
            break;
        }
        case CONNECTION_TO_SOCKET: {
            socket = io.connect(process.env.REACT_APP_SOCKET_URL);
            action.socket = socket;
            const username = localStorage.getItem("user")
            socket.emit("new user", username);

            socket.on("user created", (socketID) => localStorage.setItem("socketID", socketID));

            socket.on("user already exist", (error) => store.dispatch(throwSocketError(error)));

            socket.on("shots reinitialized", (room) => store.dispatch(refreshRoomStatus(room)));

            socket.on("game result", (room) => {
                store.dispatch(newWinner(room.winner));
                store.dispatch(refreshRoomStatus(room));
            });
            
            socket.on("user join", (room) => {
                console.log("Un utilisateur a rejoind la salle de jeu", room);
                store.dispatch(refreshRoomStatus(room));
            });
            
            socket.on("user leave", (room) => {
                console.log("Un utilisateur a quitté le salon", room);
                store.dispatch(refreshRoomStatus(room));
            });
            
            socket.on("fail creating room", (error) => store.dispatch(throwSocketError(error)));

            socket.on("fail join", (error) => store.dispatch(throwSocketError(error)));

            next(action);
            break;
        }
        case REFRESH_ROOM_STATUS: {
            next(action);
            break;
        }
        case JOIN_ROOM: {
            const { roomName } = action;
            const username = localStorage.getItem("user");

            socket.emit("join room", { roomName, username });

            socket.on("room joined", (room) => {
                localStorage.setItem("room", JSON.stringify(room));
                action.room = room;
                next(action);
            });
            break;
        }
        case CREATE_NEW_ROOM: {
            const { roomName } = action;
            const username = localStorage.getItem("user");

            socket.emit("create room", { roomName, username });

            socket.on("room created", (room) => {
                localStorage.setItem("room", JSON.stringify(room));
                action.room = room;
                next(action);
            });
            break;
        }
        case THROW_SOCKET_ERROR: {
            setTimeout(() => {
                store.dispatch(clearError());
            }, 3000);
            next(action);
            break;
        } 
        default: {
            next(action);
            break;
        }
    }
};

export default Middleware;