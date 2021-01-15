import { shotTypeObject, winRulesObject } from "../Utils";

export class GameEngine {
  isPlayerWon: boolean | string = false;
  score: number = 0;
  userShotType: string = "";
  botShotType: string = "";

  public checkWinner() {
    this.isPlayerWon = winRulesObject[this.userShotType][this.botShotType];
    if (this.isPlayerWon && this.isPlayerWon !== "equal")
      this.incrementScore(1);
  }

  private incrementScore(increment: number) {
    this.score += increment;
  }

  private resetScore() {
    this.score = 0;
  }

  public getScore() {
    return this.score;
  }

  public getWinner() {
    return this.isPlayerWon;
  }

  setUserShotType(shotType: string) {
    this.userShotType = shotType;
  }

  setBotShotType(shotType: string) {
    this.botShotType = shotType;
  }

  public replay() {
    this.botShotType = "";
    this.userShotType = "";
    this.isPlayerWon = false;
  }

  public reset() {
    this.resetScore();
    this.replay();
  }
}

export class BotEngine {
  shothistory: Array<string> = [];
  shotType: string = "";

  private makeRandomNumber(): number {
    return Math.floor(Math.random() * 3) + 1;
  }

  public shot() {
    this.shotType = shotTypeObject[this.makeRandomNumber()];
    this.shothistory.push(this.shotType);
  }

  public getShotType() {
    return this.shotType;
  }
}
