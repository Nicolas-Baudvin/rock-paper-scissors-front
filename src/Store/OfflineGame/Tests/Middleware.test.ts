import OfflineMiddleware from "../middleware";
import { newShot, replayGame } from "../actions";

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = (action: any) => OfflineMiddleware(store)(next)(action);
  return { store, next, invoke };
};

describe("Offline Middleware", () => {
  it("passes through non-function action", () => {
    const { next, invoke } = create();
    const action = { type: "TEST" };
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it("should call dispatch 4 times and next 1 time", () => {
    jest.useFakeTimers();
    const { store, invoke, next } = create();
    invoke(newShot("rock"));
    jest.runAllTimers();
    expect(store.dispatch).toHaveBeenCalledTimes(4);
    expect(next).toHaveBeenCalled();
  });

  it("should call next", () => {
    const { invoke, next } = create();
    invoke(replayGame());
    expect(next).toHaveBeenCalled();
  });
});
