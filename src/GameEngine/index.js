import { shotTypeObject, winRulesObject } from '../Utils';

export class GameEngine {
    isPlayerWon = false;
    score = 0;
    userShotType = "";
    botShotType = "";

    checkWinner() {
        this.isPlayerWon = winRulesObject[this.userShotType][this.botShotType];
        if (this.isPlayerWon && this.isPlayerWon !== "equal")
            this.incrementScore(1);
    };

    incrementScore(increment) {
        this.score += increment;
    };

    resetScore() {
        this.score = 0;
    };

    getScore() {
        return this.score;
    };

    getWinner() {
        this.checkWinner();
        return this.isPlayerWon;
    };

    setUserShotType(shotType) {
        this.userShotType = shotType;
    };

    setBotShotType(shotType) {
        this.botShotType = shotType;
    };

    replay() {
        this.botShotType = "";
        this.userShotType = "";
        this.isPlayerWon = "";
    }

    reset() {
        this.resetScore();
        this.replay();
    }
};

export class BotEngine {
    shothistory = [];
    shotType = "";

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