import { GameEngine, BotEngine } from '.';

const possibleShots = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
};

/**
 * [userShot, botShot]
 */
const shots = [
    ["rock", "rock"], // equal
    ["paper", "paper"],
    ["scissors", "scissors"],
    
    ["rock", "scissors"], // win
    ["paper", "rock"],
    ["scissors", "paper"],
    
    ["scissors", "rock"], // loose
    ["rock", "paper"],
    ["paper", "scissors"],
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
        shots.forEach((shoot) => {
            Engine.setUserShotType(shoot[0]);
            Engine.setBotShotType(shoot[1]);
            Engine.checkWinner();
        });
        expect(Engine.getScore()).toEqual(3);
    });
});