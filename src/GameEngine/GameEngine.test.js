import { GameEngine, BotEngine } from '.';

const possibleShots = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
};

/**
 * [userShot, botShot]
 */
const shoots = [
    ["rock", "rock"],
    ["rock", "paper"],
    ["rock", "scissors"],

    ["paper", "paper"],
    ["paper", "scissors"],
    ["paper", "rock"],

    ["scissors", "scissors"],
    ["scissors", "rock"],
    ["scissors", "paper"],
];

describe("Engines", () => {
    const Bot = new BotEngine();
    const Engine = new GameEngine();

    it("should make a shot", () => {
        Bot.shot();
        const shotType = Bot.getShotType();
        expect(shotType).toEqual(possibleShots[shotType]);
    });

    it("should win 3 times", () => {
        shoots.forEach((shoot) => {
            Engine.setUserShotType(shoot[0]);
            Engine.setBotShotType(shoot[1]);
            Engine.checkWinner();
        });
        expect(Engine.getScore()).toEqual(3);
    });
});