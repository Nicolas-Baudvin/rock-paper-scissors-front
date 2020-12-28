import { CONNECTION_TO_SOCKET, CREATE_NEW_ROOM } from "./actions";
import io from 'socket.io-client';

let socket;
const Middleware = (store) => (next) => (action) => {
    switch (action.type)
    {
        case CONNECTION_TO_SOCKET: {
            socket = io.connect("http://localhost:5000/");
            const username = localStorage.getItem("user")
            console.log("mw", socket)
            socket.emit("new user", username);

            socket.on("get id", (id) => {
                console.log("Nouvel ID unique reçu", id);
                localStorage.setItem("id", id);
            });
            action.socket = socket;
            next(action);
            break;
        }
        case CREATE_NEW_ROOM: {
            const { roomName } = action;
            const id = localStorage.getItem("id");
            const username = localStorage.getItem("user");

            socket.emit("create room", { roomName, username, id });

            socket.on("room created", (room) => {
                console.log(room);
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