import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playAgain, sendShotType } from "../../Store/Socket/actions";
import Game from "./Game";
import Header from "./Header";
import OnlineResult from './OnlineResult';
import { RootState } from "../../Store/reducer";
import { FriendShotInfo } from "../../Store/Socket/types";

const OnlineBoard = () => {
    const { room } = useSelector((state: RootState) => state.socket);
    const dispatch = useDispatch();
    const [userShotType, setUserShotType] = useState<string>("");
    const [friendShotType, setFriendShotType] = useState<FriendShotInfo | undefined>({
        username: "",
        shotType: ""
    });

    const handleClickReset = () => {
        setUserShotType("");
        setFriendShotType({
            username: "",
            shotType: ""
        });
        dispatch(playAgain());
    };

    const handleClickShotType = (type: string) => setUserShotType(type);

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

    return room && <>
        <Header isOnline={Boolean(room)} users={room.users} scores={room.scores} />
        {
            !userShotType && room.users.length === 2 && <Game handleClickShotType={handleClickShotType} />
        }
        {
            room.users.length === 1 && <p className="board-await">Waiting for a player</p>
        }
        {
            userShotType && <OnlineResult userShotType={userShotType} handleClickReset={handleClickReset} friendShotType={friendShotType} />
        }
    </>
};

export default OnlineBoard;