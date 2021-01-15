import { GameEngine, BotEngine } from '.';

interface PossibleShots {
    [index: string]: string
}

const possibleShots: PossibleShots = {
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
};

/**
 * [userShot, botShot]
 */
const shots: Array<Array<string>> = [
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
    const Bot: BotEngine = new BotEngine();
    const Engine: GameEngine = new GameEngine();

    it("should make a shot", () => {
        Bot.shot();
        const shotType: string = Bot.getShotType();
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