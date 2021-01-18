import {
  loading,
  newBotShotType,
  newScore,
  newShot,
  newWinner,
  replayGame,
  stopLoading,
} from "../actions";
import reducer from "../reducer";
import { OfflineState } from "../types";

const initialState: OfflineState = {
  userShotType: "",
  winner: "",
  score: 0,
  botShotType: "",
  isLoading: true,
};

describe("Offline Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should return the state with the new winner", () => {
    expect(reducer(undefined, newWinner(true))).toEqual({
      userShotType: "",
      winner: true,
      score: 0,
      botShotType: "",
      isLoading: true,
    });
  });

  it("should return the state with the new score", () => {
    expect(reducer(undefined, newScore(2))).toEqual({
      userShotType: "",
      winner: "",
      score: 2,
      botShotType: "",
      isLoading: true,
    });
  });

  it("should return the state with the new shot", () => {
    expect(reducer(undefined, newShot("rock"))).toEqual({
      userShotType: "rock",
      winner: "",
      score: 0,
      botShotType: "",
      isLoading: true,
    });
  });

  it("should return the state with the new bot's shot type", () => {
    expect(reducer(undefined, newBotShotType("rock"))).toEqual({
      userShotType: "",
      winner: "",
      score: 0,
      botShotType: "rock",
      isLoading: true,
    });
  });

  it("should return the state with loading to true", () => {
    expect(reducer(undefined, loading())).toEqual({
      userShotType: "",
      winner: "",
      score: 0,
      botShotType: "",
      isLoading: true,
    });
  });

  it("should return the state with loading to false", () => {
    expect(reducer(undefined, stopLoading())).toEqual({
      userShotType: "",
      winner: "",
      score: 0,
      botShotType: "",
      isLoading: false,
    });
  });

  it("should return the initial state after replayGame action", () => {
    expect(reducer(undefined, replayGame())).toEqual({
      userShotType: "",
      winner: "",
      score: 0,
      botShotType: "",
      isLoading: true,
    });
  });
});
