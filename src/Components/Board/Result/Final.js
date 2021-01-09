import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const Final = ({ handleClickReset }) => {
    const { winner } = useSelector((state) => state.offline);

    return <div className="board-result-final">
        <p>
            {
                winner && winner !== "equal" ? "You win !" : winner === "equal" ? "Equality" : "You loose"
            }
        </p>
        <button onClick={handleClickReset} className="board-result-final-restart">
            Play Again
        </button>
    </div>
};

Final.propTypes = {
    handleClickReset: PropTypes.func.isRequired
};

export default Final;