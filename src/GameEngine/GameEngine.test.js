import { GameEngine, BotEngine } from '.';

const possibleShots = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
};

describe("Engines", () => {
    it("should make a shot", () => {
        const Bot = new BotEngine();
        Bot.shot();
        const shotType = Bot.getShotType();
        expect(shotType).toEqual(possibleShots[shotType]);
    });

    it("should win the game", () => {
        const Engine = new GameEngine();
        Engine.setBotShotType("rock");
        Engine.setUserShotType("paper");
        const isPlayerWin = Engine.getWinner();
        expect(isPlayerWin).toEqual(true);
    });

    it("should loose the game", () => {
        const Engine = new GameEngine();
        Engine.setBotShotType("rock");
        Engine.setUserShotType("scissors");
        const isPlayerWin = Engine.getWinner();
        expect(isPlayerWin).toEqual(false);
    });

    it("should be equal", () => {
        const Engine = new GameEngine();
        Engine.setBotShotType("rock");
        Engine.setUserShotType("rock");
        const isPlayerWin = Engine.getWinner();
        expect(isPlayerWin).toEqual("equal");
    });

    it("should increment score on win", () => {
        const Engine = new GameEngine();
        Engine.setBotShotType("rock");
        Engine.setUserShotType("paper");
        const isPlayerWin = Engine.getWinner();
        const score = Engine.getScore();
        expect(score).toEqual(1);
        expect(isPlayerWin).toEqual(true);
    });
});