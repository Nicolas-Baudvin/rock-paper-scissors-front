import { useEffect, useState } from "react";
import BotPick from "./BotPick";
import Final from "./Final";
import UserPick from './userPick';


const winRulesObject = {
    rock: {
        paper: false,
        rock: "equal",
        scissors: true
    },
    paper: {
        paper: "equal",
        rock: true,
        scissors: false
    },
    scissors: {
        paper: true,
        rock: false,
        scissors: "equal"
    }
};

const shotTypeObject = {
    1: "rock",
    2: "paper",
    3: "scissors"
};

const Result = ({ userShotType, handleClickReset, setScore, score }) => {
    const [botShotType, setBotShotType] = useState("");
    const [botShotHistory, setBotShotHistory] = useState([]);
    const [isUserWin, setUserWin] = useState("");
    const [isLoading, setLoading] = useState(true);

    const checkWin = () => {
        const result = winRulesObject[userShotType][botShotType];
        if (result && result !== "equal")
        {
            incrementScore();
        }
        return result;
    };

    const incrementScore = () => {
        setScore(score + 1)
    }

    const storeBotsShots = (botShot, newArrayHistory) => {
        setBotShotType(botShot);
        setBotShotHistory(newArrayHistory);
    };

    const identifyShots = (botShotNumber) => {
        const shot = shotTypeObject[botShotNumber]
        const newArrayHistory = botShotHistory;
        newArrayHistory.push(shot);
        storeBotsShots(shot, newArrayHistory);
    };

    const makeRandomShot = () => {
        let randomNumber = Math.floor(Math.random() * 3) + 1;
        const shotType = shotTypeObject[randomNumber];
        const lastShot = botShotHistory[botShotHistory.length - 1];
        const previousLastShos = botShotHistory[botShotHistory.length - 2];

        while (lastShot === previousLastShos && shotType === lastShot)
        {
            randomNumber = Math.floor(Math.random() * 3) + 1;
        }
        return randomNumber;
    };

    useEffect(() => {
        setLoading(true);
        const randomShot = makeRandomShot();
        identifyShots(randomShot);
    }, [userShotType]);

    useEffect(() => {
        setUserWin(checkWin());
        setLoading(false);
    }, [botShotType])

    return <div className="board-result">
        <div className="board-result-container">
            <UserPick userShotType={userShotType} />     
            <BotPick botShotType={botShotType} isLoading={isLoading} />
        </div>
        {
            !isLoading && <Final handleClickReset={handleClickReset} isUserWin={isUserWin} />
        }
    </div>
};

export default Result;