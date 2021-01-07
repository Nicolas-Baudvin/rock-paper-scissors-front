import { useEffect, useState } from "react";
import BotPick from "./BotPick";
import Final from "./Final";
import UserPick from './userPick';
import { BotEngine, GameEngine } from '../../../GameEngine';
import PropTypes from 'prop-types';

const Result = ({ userShotType, handleClickReset, setScore, score }) => {
    const [isUserWin, setUserWin] = useState("");
    const [isLoading, setLoading] = useState(true);
    const [botShotType, setBotShotType] = useState("");

    const incrementScore = (number) => setScore(score + number);

    useEffect(() => {
        setLoading(true);
        const Bot = new BotEngine();
        setBotShotType(Bot.getShotType());
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const Engine = new GameEngine(userShotType, botShotType);
            const isPlayerWin = Engine.getWinner();
            setUserWin(isPlayerWin);

            if (isPlayerWin && isPlayerWin !== "equal")
                incrementScore(1);

            setLoading(false);
        }, 1000);
    }, [botShotType]);

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

Result.propTypes = {
    userShotType: PropTypes.string.isRequired,
    handleClickReset: PropTypes.func.isRequired,
    setScore: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
};

export default Result;