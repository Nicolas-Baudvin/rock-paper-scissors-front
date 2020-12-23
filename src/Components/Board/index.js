import './style.scss';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';
import { useState } from 'react';
import Modale from './Modale';
import Result from './Result';

const Board = () => {
    const [showRules, setShowRules] = useState(false);
    const [shotType, setShotType] = useState("");

    const handleClickRules = () => {
        setShowRules(!showRules);
    };

    /**
     * @param {String} type Rock, Paper or Scissors
     */
    const handleClickShotType = (type) => {
        setShotType(type);
    };

    return <main className="board">
        <Header score={0} />
        {
            !shotType && <Game handleClickShotType={handleClickShotType} />
        }
        {
            shotType && <Result shotType={shotType} setShotType={setShotType} />
        }
        <Footer handleClickRules={handleClickRules} />
        {
            showRules && <Modale handleClickRules={handleClickRules} />
        }
    </main>
};

export default Board;