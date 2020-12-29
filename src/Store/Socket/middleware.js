import { CONNECTION_TO_SOCKET, CREATE_NEW_ROOM, JOIN_ROOM, LOG_OUT, refreshRoomStatus, REFRESH_ROOM_STATUS, throwSocketError } from "./actions";
import io from 'socket.io-client';

let socket = null;
const Middleware = (store) => (next) => (action) => {
    switch (action.type)
    {
        case LOG_OUT: {
            console.log("déconnexion")
            localStorage.clear();
            if (socket !== null)
            {
                socket.emit("logout");
                next(action);
            }
            break;
        }
        case CONNECTION_TO_SOCKET: {
            socket = io.connect("http://localhost:5000/");
            action.socket = socket;
            const username = localStorage.getItem("user")
            console.log("mw", socket)
            socket.emit("new user", username);

            socket.on("get id", (id) => {
                localStorage.setItem("id", id);
                next(action);
            });

            socket.on("user join", (room) => {
                console.log("Un utilisateur a rejoind la salle de jeu", room);
                store.dispatch(refreshRoomStatus(room));
            });

            socket.on("user leave", (room) => {
                console.log("Un utilisateur a quitté le salon", room);
                store.dispatch(refreshRoomStatus(room));
            });

            socket.on("fail creating room", (err) => store.dispatch(throwSocketError(err)));
            socket.on("fail join", (err) => store.dispatch(throwSocketError(err)));

            next(action);
            break;
        }
        case REFRESH_ROOM_STATUS: {
            next(action);
            break;
        }
        case JOIN_ROOM: {
            const { roomName } = action;
            const id = localStorage.getItem("id");
            const username = localStorage.getItem("user");

            socket.emit("join room", { roomName, id, username });

            socket.on("room joined", (room) => {
                localStorage.setItem("room", JSON.stringify(room));
                action.room = room;
                next(action);
            });
            break;
        }
        case CREATE_NEW_ROOM: {
            const { roomName } = action;
            const id = localStorage.getItem("id");
            const username = localStorage.getItem("user");

            socket.emit("create room", { roomName, username, id });

            socket.on("room created", (room) => {
                localStorage.setItem("room", JSON.stringify(room));
                action.room = room;
                next(action);
            });
            break;
        }
        default: {
            next(action);
            break;
        }
    }
};

export default Middleware;