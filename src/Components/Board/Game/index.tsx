import PropTypes from 'prop-types';

interface Props {
    handleClickShotType: (shotType: string) => void
}

const Game = ({ handleClickShotType }: Props) => {
    return <div className="board-game">
        <img className="board-game-pic" src={`${process.env.PUBLIC_URL}/img/bg-triangle.svg`} alt="Board" />

        <div onClick={() => handleClickShotType("rock")} className="board-game-rock">
            <img src={`${process.env.PUBLIC_URL}/img/icon-rock.svg`} alt="" />
        </div>

        <div onClick={() => handleClickShotType("paper")} className="board-game-paper">
            <img src={`${process.env.PUBLIC_URL}/img/icon-paper.svg`} alt="" />
        </div>

        <div onClick={() => handleClickShotType("scissors")} className="board-game-scissors">
            <img src={`${process.env.PUBLIC_URL}/img/icon-scissors.svg`} alt="" />
        </div>
    </div>
};

Game.propTypes = {
    handleClickShotType: PropTypes.func.isRequired
};

export default Game;