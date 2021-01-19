import {
  clearError,
  CONNECTION_TO_SOCKET,
  CREATE_NEW_ROOM,
  JOIN_ROOM,
  LOG_OUT,
  newSocket,
  newWinner,
  PLAY_AGAIN,
  refreshRoomStatus,
  REFRESH_ROOM_STATUS,
  SEND_SHOT_TYPE,
  throwSocketError,
  THROW_SOCKET_ERROR,
} from "./actions";
import { getUsernameFromLocalStorage } from "../../Utils";
import io from "socket.io-client";
import { Middleware } from "redux";
import { RootState } from "../reducer";
import { Room } from "./types";

let socket: SocketIOClient.Socket | null = null;

const middleware: Middleware<{}, RootState> = (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_OUT: {
      if (socket !== null) {
        socket.emit("logout");
      }
      localStorage.clear();
      next(action);
      break;
    }
    case PLAY_AGAIN: {
      const { room } = store.getState().socket;
      socket?.emit("play again", room?.name);
      next(action);
      break;
    }
    case SEND_SHOT_TYPE: {
      const username = getUsernameFromLocalStorage("user");
      const { shotType } = action;
      const roomName = store.getState().socket?.room?.name;

      socket?.emit("send shot type", { shotType, username, roomName });
      next(action);
      break;
    }
    case CONNECTION_TO_SOCKET: {
      const url: string | undefined = process.env.REACT_APP_SOCKET_URL || "";

      socket = io.connect(url);
      store.dispatch(newSocket(socket));

      const username = getUsernameFromLocalStorage("user");

      socket.emit("new user", username);

      socket.on("user created", (socketID: string) =>
        localStorage.setItem("socketID", socketID)
      );

      socket.on("user already exist", (error: string) =>
        store.dispatch(throwSocketError(error))
      );

      socket.on("shots reinitialized", (room: Room) => {
        store.dispatch(refreshRoomStatus(room));
        store.dispatch(newWinner(""));
      });

      socket.on("game result", (room: Room) => {
        store.dispatch(newWinner(room.winner));
        store.dispatch(refreshRoomStatus(room));
      });

      socket.on("user join", (room: Room) => {
        console.log("Un utilisateur a rejoind la salle de jeu");
        store.dispatch(refreshRoomStatus(room));
      });

      socket.on("user leave", (room: Room) => {
        console.log("Un utilisateur a quitté le salon");
        store.dispatch(refreshRoomStatus(room));
      });

      socket.on("fail creating room", (error: string) =>
        store.dispatch(throwSocketError(error))
      );

      socket.on("fail join", (error: string) =>
        store.dispatch(throwSocketError(error))
      );

      next(action);
      break;
    }
    case JOIN_ROOM: {
      const { roomName } = action;
      const username = getUsernameFromLocalStorage("user");

      socket?.emit("join room", { roomName, username });

      socket?.on("room joined", (room: Room) => {
        localStorage.setItem("room", JSON.stringify(room));
        store.dispatch(refreshRoomStatus(room));
        next(action);
      });
      break;
    }
    case CREATE_NEW_ROOM: {
      const { roomName } = action;
      const username = getUsernameFromLocalStorage("user");

      socket?.emit("create room", { roomName, username });

      socket?.on("room created", (room: Room) => {
        localStorage.setItem("room", JSON.stringify(room));
        store.dispatch(refreshRoomStatus(room));
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

export default middleware;
