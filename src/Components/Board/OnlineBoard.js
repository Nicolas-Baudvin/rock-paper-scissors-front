import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { playAgain, sendShotType } from "../../Store/Socket/actions";
import Game from "./Game";
import Header from "./Header";
import OnlineResult from './OnlineResult';
import PropTypes from 'prop-types';

const OnlineBoard = ({ room }) => {
    const dispatch = useDispatch();
    const [userShotType, setUserShotType] = useState("");
    const [friendShotType, setFriendShotType] = useState("");

    const handleClickReset = () => {
        setUserShotType("");
        setFriendShotType("");
        dispatch(playAgain());
    };

    const handleClickShotType = (type) => setUserShotType(type);

    useEffect(() => {
        if (userShotType)
        {
            dispatch(sendShotType(userShotType));
        }
    }, [userShotType]);

    useEffect(() => {
        if (room?.shots?.length === 2)
        {
            const username = localStorage.getItem("user");
            const friendShot = room.shots.find((shot) => shot.username !== username);
            setFriendShotType(friendShot);
        }
    }, [room && room.shots]);

    return <>
        <Header isOnline={Boolean(room)} users={room.users} scores={room.scores} />
        {
            !userShotType && room.users.length === 2 && <Game handleClickShotType={handleClickShotType} isOnline={room.isOnline} users={room.users} owner={room.owner} />
        }
        {
            room.users.length === 1 && <p className="board-await">Waiting for a player</p>
        }
        {
            userShotType && <OnlineResult userShotType={userShotType} handleClickReset={handleClickReset} friendShotType={friendShotType} />
        }
    </>
};

OnlineBoard.propTypes = {
    room: PropTypes.shape({
        messages: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        owner: PropTypes.shape({
            username: PropTypes.string.isRequired,
            uniqueID: PropTypes.string.isRequired,
            socketID: PropTypes.string.isRequired
        }),
        scores: PropTypes.object,
        shots: PropTypes.array,
        users: PropTypes.array,
    })
};

export default OnlineBoard;