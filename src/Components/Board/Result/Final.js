import PropTypes from 'prop-types';


const Final = ({ isUserWin, handleClickReset }) => {
    return <div className="board-result-final">
        <p>
            {
                isUserWin && isUserWin !== "equal" ? "You win !" : isUserWin === "equal" ? "Equality" : "You loose"
            }
        </p>
        <button onClick={handleClickReset} className="board-result-final-restart">
            Play Again
        </button>
    </div>
};

Final.propTypes = {
    isUserWin: PropTypes.bool.isRequired,
    handleClickReset: PropTypes.func.isRequired
};

export default Final;