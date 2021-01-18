import * as actions from "../actions";
import { OfflineAction } from "../types";

describe("Offline Actions", () => {
    it("should create an action to do a new shot", () => {
        const expectedAction: OfflineAction = {
            type: actions.NEW_SHOT,
            shotType: "rock"
        };
        expect(actions.newShot("rock")).toEqual(expectedAction);
    });

    it("should create an action with a new winner", () => {
        const expectedAction: OfflineAction = {
            type: actions.NEW_WINNER,
            winner: true
        };
        expect(actions.newWinner(true)).toEqual(expectedAction);
    });

    it("should create an action to stop loading", () => {
        const expectedAction: OfflineAction = {
            type: actions.STOP_LOADING,
        };
        expect(actions.stopLoading()).toEqual(expectedAction);
    });

    it("should create an action to start loading", () => {
        const expectedAction: OfflineAction = {
          type: actions.LOADING,
        };
        expect(actions.loading()).toEqual(expectedAction);
    });

    it("should create an action to store the new bot's shot", () => {
        const expectedAction: OfflineAction = {
            type: actions.NEW_BOT_SHOT_TYPE,
            shotType: "rock"
        };
        expect(actions.newBotShotType("rock")).toEqual(expectedAction);
    });

    it("should create an action to store the new score", () => {
        const expectedAction: OfflineAction = {
            type: actions.NEW_SCORE,
            score: 1
        };
        expect(actions.newScore(1)).toEqual(expectedAction);
    });

    it("should create an action to replay game", () => {
        const expectedAction: OfflineAction = {
            type: actions.REPLAY_GAME,
        };
        expect(actions.replayGame()).toEqual(expectedAction);
    });
});