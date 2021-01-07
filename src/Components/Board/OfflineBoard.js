import { useState } from "react";
import Game from "./Game";
import Header from "./Header";
import Result from "./Result";

const OfflineBoard = () => {
    const [score, setScore] = useState(0);
    const [userShotType, setUserShotType] = useState("");

    const handleClickShotType = (type) => setUserShotType(type);

    const handleClickReset = () => setUserShotType("");

    return <>
        <Header score={score} />
        {
            !userShotType && <Game handleClickShotType={handleClickShotType} />
        }
        {
            userShotType && <Result userShotType={userShotType} setShotType={setUserShotType} handleClickReset={handleClickReset} setScore={setScore} score={score} />
        }
    </>
};

export default OfflineBoard;