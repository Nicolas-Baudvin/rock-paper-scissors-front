import * as actions from "../actions";
import { Room, SocketActions } from "../types";

describe("Socket actions", () => {
  const fakeRoom: Room = {
    owner: { username: "test", socketID: "test" },
    users: [],
    shots: [],
    winner: "",
    messages: [],
    name: "room",
    scores: { test: 0 },
  };

  it("should create an action to connect to socket", () => {
    const expectedAction: SocketActions = {
      type: actions.CONNECTION_TO_SOCKET,
      socket: null,
    };
    expect(actions.connectionToSocket()).toEqual(expectedAction);
  });

  it("should create an action to create a room", () => {
    const roomName = "test";
    const expectedAction: SocketActions = {
      type: actions.CREATE_NEW_ROOM,
      roomName,
      room: null,
    };
    expect(actions.createNewRoom(roomName)).toEqual(expectedAction);
  });

  it("should create an action to join a room", () => {
    const roomName = "test";
    const expectedAction: SocketActions = {
      type: actions.JOIN_ROOM,
      roomName,
      room: null,
    };
    expect(actions.joinRoom(roomName)).toEqual(expectedAction);
  });

  it("should create an action to log out", () => {
    const expectedAction: SocketActions = {
      type: actions.LOG_OUT,
    };
    expect(actions.logOut()).toEqual(expectedAction);
  });

  it("should create an action to refresh the room status", () => {
    const expectedAction: SocketActions = {
      type: actions.REFRESH_ROOM_STATUS,
      room: fakeRoom,
    };
    expect(actions.refreshRoomStatus(fakeRoom)).toEqual(expectedAction);
  });

  it("should create an action to throw socket error", () => {
    const error = "error";
    const expectedAction: SocketActions = {
      type: actions.THROW_SOCKET_ERROR,
      error,
    };
    expect(actions.throwSocketError(error)).toEqual(expectedAction);
  });

  it("should create an action to send user's shot type", () => {
    const shotType = "rock";
    const expectedAction: SocketActions = {
      type: actions.SEND_SHOT_TYPE,
      shotType,
    };
    expect(actions.sendShotType(shotType)).toEqual(expectedAction);
  });

  it("should create an action to store new winner", () => {
    const winner = "Me";
    const expectedAction: SocketActions = {
      type: actions.NEW_WINNER,
      winner,
    };
    expect(actions.newWinner(winner)).toEqual(expectedAction);
  });

  it("should create an action to replay", () => {
    const expectedAction: SocketActions = {
      type: actions.PLAY_AGAIN,
    };
    expect(actions.playAgain()).toEqual(expectedAction);
  });

  it("should create an action to clear current socket error", () => {
    const expectedAction: SocketActions = {
      type: actions.CLEAR_ERROR,
    };
    expect(actions.clearError()).toEqual(expectedAction);
  });
});