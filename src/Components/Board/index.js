import './style.scss';
import Header from './Header';

const Board = () => {
    return <main className="board">
        <Header score={0} />
        <div className="board-game">
            <img className="board-game-pic" src={`${process.env.PUBLIC_URL}/img/bg-triangle.svg`} alt="Board" />
            <div className="board-game-rock">
                <img src={`${process.env.PUBLIC_URL}/img/icon-rock.svg`} alt="" />
            </div>
            <div className="board-game-paper">
                <img src={`${process.env.PUBLIC_URL}/img/icon-paper.svg`} alt="" />
            </div>
            <div className="board-game-scissors">
                <img src={`${process.env.PUBLIC_URL}/img/icon-scissors.svg`} alt="" />
            </div>
        </div>
    </main>
};

export default Board;