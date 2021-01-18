import { GameEngine, BotEngine } from ".";

interface PossibleShots {
  [index: string]: string;
}

const possibleShots: PossibleShots = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
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

const simpleShots = [
  ["rock", "rock"],
  ["rock", "scissors"],
  ["scissors", "rock"],
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

  it("should reset score", () => {
    shots.forEach((shoot) => {
      Engine.setUserShotType(shoot[0]);
      Engine.setBotShotType(shoot[1]);
      Engine.checkWinner();
    });
    Engine.reset();
    const score = Engine.getScore();
    expect(score).toEqual(0);
  });

  it("should return 'equal'", () => { 
      Engine.setUserShotType(simpleShots[0][0]);
      Engine.setBotShotType(simpleShots[0][1]);
      Engine.checkWinner();
      const winner = Engine.getWinner();
      expect(winner).toEqual("equal");
  });

  it("should return 'true'", () => {
    Engine.setUserShotType(simpleShots[1][0]);
    Engine.setBotShotType(simpleShots[1][1]);
    Engine.checkWinner();
    const winner = Engine.getWinner();
    expect(winner).toEqual(true);
  });

  it("should return 'false'", () => {
    Engine.setUserShotType(simpleShots[2][0]);
    Engine.setBotShotType(simpleShots[2][1]);
    Engine.checkWinner();
    const winner = Engine.getWinner();
    expect(winner).toEqual(false);
  });
});
