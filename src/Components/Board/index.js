import './style.scss';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Modale from './Modale';
import Result from './Result';
import { useDispatch, useSelector } from 'react-redux';
import OnlineResult from './OnlineResult';
import { playAgain, sendShotType } from '../../Store/Socket/actions';

const Board = () => {
    const dispatch = useDispatch();
    const { room } = useSelector(state => state.socket);
    const [showRules, setShowRules] = useState(false);
    const [userShotType, setUserShotType] = useState("");
    const [friendShotType, setFriendShotType] = useState("");
    const [score, setScore] = useState(0);
    const handleClickRules = () => {
        setShowRules(!showRules);
    };

    const handleClickReset = () => {
        setUserShotType("");
        setFriendShotType("");
        if (room)
        {
            // TODO: Dispatch Reset Shots
            dispatch(playAgain());
        }
    };

    /**
     * @param {String} type Rock, Paper or Scissors
     */
    const handleClickShotType = (type) => {
        setUserShotType(type);
    };

    useEffect(() => {
        if (room && userShotType)
        {
            dispatch(sendShotType(userShotType));
        }
    }, [userShotType]);

    useEffect(() => {
        if (room.shots.length === 2)
        {
            const username = localStorage.getItem("user");
            const friendShot = room.shots.find((shot) => shot.username !== username);
            console.log(friendShot);
            setFriendShotType(friendShot);
        }
    }, [room.shots]);

    return room ? <main className="board">
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
        <Footer handleClickRules={handleClickRules} />
        {
            showRules && <Modale handleClickRules={handleClickRules} />
        }
    </main>
        : <main className="board"> <Header score={score} />
            {
                !userShotType && <Game handleClickShotType={handleClickShotType} />
            }
            {
                userShotType && <Result userShotType={userShotType} setShotType={setUserShotType} handleClickReset={handleClickReset} setScore={setScore} score={score} />
            }
            <Footer handleClickRules={handleClickRules} />
            {
                showRules && <Modale handleClickRules={handleClickRules} />
            }
        </main >
};

export default Board;