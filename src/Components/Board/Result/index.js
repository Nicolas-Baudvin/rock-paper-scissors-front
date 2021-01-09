import { useEffect } from "react";
import BotPick from "./BotPick";
import Final from "./Final";
import UserPick from './userPick';
import PropTypes from 'prop-types';
import { newShot } from "../../../Store/OfflineGame/actions";
import { useDispatch, useSelector } from "react-redux";

const Result = ({ userShotType, handleClickReset }) => {
    const dispatch = useDispatch();
    const { winner, botShotType, isLoading } = useSelector((state) => state.offline);

    useEffect(() => {
        dispatch(newShot(userShotType));
    }, []);

    return <div className="board-result">
        <div className="board-result-container">
            <UserPick userShotType={userShotType} />
            <BotPick botShotType={botShotType} />
        </div>
        {
            !isLoading && <Final handleClickReset={handleClickReset} isUserWin={winner} />
        }
    </div>
};

Result.propTypes = {
    userShotType: PropTypes.string.isRequired,
    handleClickReset: PropTypes.func.isRequired,
};

export default Result;