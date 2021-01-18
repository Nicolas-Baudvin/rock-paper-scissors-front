import { getRoomFromLocalStorage } from "../../../Utils";
import {
  clearError,
  newWinner,
  refreshRoomStatus,
  throwSocketError,
} from "../actions";
import reducer from "../reducer";
import { Room, SocketState } from "../types";

describe("Socket reducer", () => {
  const initialState: SocketState = {
    id: "",
    username: "",
    isLoading: false,
    currentSocket: null,
    shotType: "",
    room: getRoomFromLocalStorage("room"),
    error: "",
    showError: false,
  };

  const makeFakeRoom = (roomName: string): Room => ({
    owner: { username: "test", socketID: "test" },
    users: [],
    shots: [],
    winner: "",
    messages: [],
    name: roomName,
    scores: { test: 0 },
  });

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should return the state with the winner", () => {
    expect(reducer(undefined, newWinner("test"))).toEqual({
      id: "",
      username: "",
      isLoading: false,
      currentSocket: null,
      shotType: "",
      room: getRoomFromLocalStorage("room"),
      error: "",
      showError: false,
      winner: "test",
    });
  });

  it("should return the state with the new room", () => {
    expect(reducer(undefined, refreshRoomStatus(makeFakeRoom("room")))).toEqual(
      {
        id: "",
        username: "",
        isLoading: false,
        currentSocket: null,
        shotType: "",
        room: makeFakeRoom("room"),
        error: "",
        showError: false,
      }
    );
  });

  it("should return the state with the error", () => {
    expect(reducer(undefined, throwSocketError("error"))).toEqual({
      id: "",
      username: "",
      isLoading: false,
      currentSocket: null,
      shotType: "",
      room: null,
      error: "error",
      showError: true,
    });
  });
  it("should return the state with error cleared", () => {
    expect(reducer(undefined, clearError())).toEqual({
      id: "",
      username: "",
      isLoading: false,
      currentSocket: null,
      shotType: "",
      room: null,
      error: "",
      showError: false,
    });
  });
});
