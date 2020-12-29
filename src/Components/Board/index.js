import './style.scss';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';
import { useState } from 'react';
import Modale from './Modale';
import Result from './Result';
import { useSelector } from 'react-redux';

const Board = () => {
    const { room } = useSelector(state => state.socket);
    const [showRules, setShowRules] = useState(false);
    const [userShotType, setShotType] = useState("");
    const [score, setScore] = useState(0);
    console.log(room);
    const handleClickRules = () => {
        setShowRules(!showRules);
    };


    const handleClickReset = () => {
        setShotType("");
    };

    /**
     * @param {String} type Rock, Paper or Scissors
     */
    const handleClickShotType = (type) => {
        setShotType(type);
    };

    return room ? <main className="board">
        <Header isOnline={Boolean(room)} users={room.users} scores={room.scores} />
        {
            !userShotType && room.users.length === 2 && <Game handleClickShotType={handleClickShotType} isOnline={room.isOnline} users={room.users} owner={room.owner} />
        }
        {
            room.users.length === 1 && <p className="board-await">Waiting for a player</p>
        }
        {
            userShotType && <Result userShotType={userShotType} setShotType={setShotType} handleClickReset={handleClickReset} setScore={setScore} score={score} />
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
                userShotType && <Result userShotType={userShotType} setShotType={setShotType} handleClickReset={handleClickReset} setScore={setScore} score={score} />
            }
            <Footer handleClickRules={handleClickRules} />
            {
                showRules && <Modale handleClickRules={handleClickRules} />
            }
        </main >
};

export default Board;