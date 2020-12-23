import { useEffect, useState } from "react";


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
            <div className="board-result-picked">
                <p>You picked</p>
                <div className={`board-result-${userShotType}`}>
                    <img src={`${process.env.PUBLIC_URL}/img/icon-${userShotType}.svg`} alt="" />
                </div>
            </div>

            <div className="board-result-botpicked">
                <p>The bot picked</p>
                {
                    !isLoading && <div className={`board-result-${botShotType}`}>
                        <img src={`${process.env.PUBLIC_URL}/img/icon-${botShotType}.svg`} alt="" />
                    </div>
                }
                {
                    isLoading && <div className="board-result-botpicked-loading">
                        Waiting for bot ...
                </div>
                }
            </div>
        </div>
        {
            !isLoading && <div className="board-result-final">
                <p>
                    {
                        isUserWin && isUserWin !== "equal" ? "You win !" : isUserWin === "equal" ? "Equality" : "You loose"
                    }
                </p>
                <button onClick={handleClickReset} className="board-result-final-restart">
                    Play Again
            </button>
            </div>
        }
    </div>
};

export default Result;