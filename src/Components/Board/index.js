import './style.scss';
import Header from './Header';
import Game from './Game';
import Footer from './Footer';
import { useState } from 'react';

const Board = () => {
    const [showRules, setShowRules] = useState(false);
    const handleClickRules = () => {
        setShowRules(!showRules);
    };
    return <main className="board">
        <Header score={0} />
        <Game />
        <Footer handleClickRules={handleClickRules} />
        {
            showRules && <div className="modale">
                <img onClick={handleClickRules} className="modale-close" src={`${process.env.PUBLIC_URL}/img/icon-close.svg`} alt="fermer" />
                <img className="modale-rules" src={`${process.env.PUBLIC_URL}/img/image-rules.svg`} alt="" />
            </div>
        }
    </main>
};

export default Board;