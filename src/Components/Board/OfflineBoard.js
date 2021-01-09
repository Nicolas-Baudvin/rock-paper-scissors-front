import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetGame } from "../../Store/OfflineGame/actions";
import Game from "./Game";
import Header from "./Header";
import Result from "./Result";

const OfflineBoard = () => {
    const dispatch = useDispatch();
    const [userShotType, setUserShotType] = useState("");

    const handleClickShotType = (type) => setUserShotType(type);

    const handleClickReset = () => {
        dispatch(resetGame());
        setUserShotType("")
    };

    return <>
        <Header />
        {
            !userShotType && <Game handleClickShotType={handleClickShotType} />
        }
        {
            userShotType && <Result userShotType={userShotType} setShotType={setUserShotType} handleClickReset={handleClickReset} />
        }
    </>
};

export default OfflineBoard;