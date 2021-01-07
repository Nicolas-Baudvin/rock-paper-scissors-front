import { shotTypeObject, winRulesObject } from '../Utils';

export class GameEngine {
    isPlayerWon = false;

    constructor(userShotType, botShotType) {
        this.userShotType = userShotType;
        this.botTypeObject = botShotType;
        this.checkWinner();
    }

    checkWinner() {
        this.isPlayerWon = winRulesObject[this.userShotType][this.botTypeObject];
    }

    getWinner() {
        return this.isPlayerWon;
    }
};

export class BotEngine {
    shothistory = [];
    shotType = "";

    constructor() {
        this.shot();
    };

    makeRandomNumber() {
        return Math.floor(Math.random() * 3) + 1;
    }

    shot() {
        this.shotType = shotTypeObject[this.makeRandomNumber()];

        while (this.shothistory.length > 2 && (this.shotType === this.shothistory[this.shothistory - 1] || this.shothistory[this.shothistory - 2]))
        {
            this.shotType = shotTypeObject[this.makeRandomNumber()];
        }

        this.shothistory.push(this.shotType);
    }

    getShotType() {
        return this.shotType;
    }
};