import SocketMiddleware from "../middleware";
import {
    clearError,
  connectionToSocket,
  createNewRoom,
  joinRoom,
  logOut,
  playAgain,
  sendShotType,
  throwSocketError,
} from "../actions";
import { connect as connectMock } from "socket.io-client";

const create = () => {
  const store = {
    getState: jest.fn(() => ({ socket: { room: { name: "roomName" } } })),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = (action: any) => SocketMiddleware(store)(next)(action);
  return { store, next, invoke };
};

jest.mock("socket.io-client", () => ({
  ...jest.requireActual("socket.io-client"),
  connect: jest.fn(),
}));

describe("Socket Middleware", () => {
  const mockEmitEvent = jest.fn();
  const mockOnEvent = jest.fn();
  beforeEach(() => {
    (connectMock as jest.Mock).mockImplementation(() => ({
      on: mockOnEvent,
      emit: mockEmitEvent,
    }));
  });
  it("passes through non-function action", () => {
    const { next, invoke } = create();
    const action = { type: "TEST" };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("should call connect", () => {
    const { next, invoke, store } = create();
    invoke(connectionToSocket());
    expect(connectMock).toHaveBeenCalledWith(process.env.REACT_APP_SOCKET_URL);
  });

  it("should call socket.emit, socket.on and dispatch", () => {
    const { invoke, store } = create();
    invoke(connectionToSocket());
    expect(mockOnEvent).toHaveBeenCalled();
    expect(mockEmitEvent).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled();
  });

  it("should call emit with 'logout' event", () => {
    const { invoke } = create();
    invoke(logOut());
    expect(mockEmitEvent).toHaveBeenCalledWith("logout");
  });

  it("should call emit with the room name and 'play again' event", () => {
    const { invoke } = create();
    invoke(playAgain());
    expect(mockEmitEvent).toHaveBeenCalledWith("play again", "roomName");
  });

  it("should call 'send shot type' and send shotType, username and roomName", () => {
    const { invoke } = create();
    invoke(sendShotType("rock"));
    expect(mockEmitEvent).toHaveBeenCalledWith("send shot type", {
      username: "",
      shotType: "rock",
      roomName: "roomName",
    });
  });

  it("should call socket.emit with 'join room' event and socket.on", () => {
    const { invoke } = create();
    invoke(joinRoom("roomName"));
    expect(mockEmitEvent).toHaveBeenCalledWith("join room", {
      username: "",
      roomName: "roomName",
    });
    expect(mockOnEvent).toHaveBeenCalled();
  });

  it("should call socket.emit with 'create room' event and socket.on", () => {
    const { invoke } = create();
    invoke(createNewRoom("roomName"));
    expect(mockEmitEvent).toHaveBeenCalledWith("create room", {
      username: "",
      roomName: "roomName",
    });
    expect(mockOnEvent).toHaveBeenCalled();
  });

  it("should clear error", () => {
    jest.useFakeTimers();
    const { invoke, store } = create();
    invoke(throwSocketError("error"));
    jest.runAllTimers();
    expect(store.dispatch).toHaveBeenCalledWith(clearError());
  });
});
