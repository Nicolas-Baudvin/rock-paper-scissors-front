import { Score } from "../../Components/Board/Header/types";
import {
  CLEAR_ERROR,
  CONNECTION_TO_SOCKET,
  CREATE_NEW_ROOM,
  JOIN_ROOM,
  LOG_OUT,
  NEW_WINNER,
  PLAY_AGAIN,
  REFRESH_ROOM_STATUS,
  SEND_SHOT_TYPE,
  THROW_SOCKET_ERROR,
} from "./actions";

interface User {
  username: string;
  socketID: string;
}

interface Shots {
  username: string;
  shotType: string;
}

export interface FriendShotInfo {
  username: string;
  shotType: string;
}

export interface Room {
  messages: Array<string>;
  name: string;
  owner: Owner;
  scores: Score;
  shots: Array<Shots>;
  users: Array<User>;
  winner: string;
}

export interface Owner {
  username: string;
  socketID: string;
}

export interface SocketState {
  id: string;
  username: string;
  isLoading: boolean;
  currentSocket: SocketIOClient.Socket | null;
  shotType: string;
  room: Room | null;
  error: string | undefined;
  showError: boolean;
  winner?: string | Boolean;
}

/**
 * Actions
 */

interface LogOutAction {
  type: typeof LOG_OUT;
}

interface PlayAgainAction {
  type: typeof PLAY_AGAIN
}

interface NewWinnerAction {
  type: typeof NEW_WINNER;
  winner: string;
}

interface ConnectionToSocketAction {
  type: typeof CONNECTION_TO_SOCKET;
  socket: SocketIOClient.Socket | null;
}

interface RefreshRoomStatusAction {
  type: typeof REFRESH_ROOM_STATUS;
  room: Room;
}

interface JoinRoomAction {
  type: typeof JOIN_ROOM;
  room: Room | null;
  roomName: string;
}

interface CreateRoomAction {
  type: typeof CREATE_NEW_ROOM;
  room: Room | null;
  roomName: string;
}

interface ThrowSocketErrorAction {
  type: typeof THROW_SOCKET_ERROR;
  error: string;
}

interface ClearErrorAction {
  type: typeof CLEAR_ERROR;
}

interface SendShotTypeAction {
  type: typeof SEND_SHOT_TYPE;
  shotType: string;
}

export type SocketActions =
  | NewWinnerAction
  | ConnectionToSocketAction
  | RefreshRoomStatusAction
  | JoinRoomAction
  | CreateRoomAction
  | ThrowSocketErrorAction
  | ClearErrorAction
  | SendShotTypeAction
  | LogOutAction
  | PlayAgainAction;
