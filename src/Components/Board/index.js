import './style.scss';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';
import { useState } from 'react';
import Modale from './Modale';
import Result from './Result';

const Board = () => {
    const [showRules, setShowRules] = useState(false);
    const [userShotType, setShotType] = useState("");
    const [score, setScore] = useState(0);

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

    return <main className="board">
        <Header score={score} />
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
    </main>
};

export default Board;