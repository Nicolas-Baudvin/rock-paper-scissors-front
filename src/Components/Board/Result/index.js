import { useEffect, useState } from "react";

const Result = ({ shotType }) => {
    const [botShotType, setBotShotType] = useState("");
    const [botShotHistory, setBotShotHistory] = useState([]);
    const [winner, setWinner] = useState("");

    const checkWinner = () => {
        switch (botShotType)
        {
            case "rock": {

                break;
            }
            case "paper": {

                break;
            }
            case "scissors": {

                break;
            }
            
            default:
                break;
        }
    };

    const makeRandomShot = () => {
        const randomNumber = Math.floor(Math.random() * 3) + 1;
        switch (randomNumber)
        {
            case 1: {
                const shot = "rock"
                const newArrayHistory = botShotHistory;
                newArrayHistory.push(shot);
                setBotShotType(shot);
                setBotShotHistory(newArrayHistory)
                break;
            }
            case 2: {
                const shot = "paper";
                const newArrayHistory = botShotHistory;
                newArrayHistory.push(shot);
                setBotShotType(shot);
                setBotShotHistory(newArrayHistory)
                break;
            }
            case 3: {
                const shot = "scissors";
                const newArrayHistory = botShotHistory;
                newArrayHistory.push(shot);
                setBotShotType(shot);
                setBotShotHistory(newArrayHistory)
                break;
            }
            default:
                break;
        }

        checkWinner();
    };

    useEffect(() => {
        makeRandomShot();
    }, [shotType]);

    return <div className="board-result">
        <div className="board-result-picked">
            <p>You picked</p>
            <div className={`board-result-${shotType}`}>
                <img src={`${process.env.PUBLIC_URL}/img/icon-${shotType}.svg`} alt="" />
            </div>
        </div>

        <div className="board-result-botpicked">
            <p>The bot picked</p>
            <div className={`board-result-${botShotType}`}>
                <img src={`${process.env.PUBLIC_URL}/img/icon-${botShotType}.svg`} alt="" />
            </div>
        </div>
    </div>
};

export default Result;