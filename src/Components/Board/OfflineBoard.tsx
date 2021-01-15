import { useState } from "react";
import { useDispatch } from "react-redux";
import { replayGame } from "../../Store/OfflineGame/actions";
import Game from "./Game";
import Header from "./Header";
import Result from "./Result";

const OfflineBoard = () => {
    const dispatch = useDispatch();
    const [userShotType, setUserShotType] = useState("");

    const handleClickShotType = (type: string): void => setUserShotType(type);

    const handleClickReset = () => {
        dispatch(replayGame());
        setUserShotType("")
    };

    return <>
        <Header />
        {
            !userShotType && <Game handleClickShotType={handleClickShotType} />
        }
        {
            userShotType && <Result userShotType={userShotType} handleClickReset={handleClickReset} />
        }
    </>
};

export default OfflineBoard;