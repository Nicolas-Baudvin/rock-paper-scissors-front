import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const FinalResult = ({ handleClickReset }) => {
    const { winner } = useSelector((state) => state.socket);
    return winner && <div className="board-result-final">
        <p>
            {winner !== "equal" ? `Winner is ${winner}` : "Equality !"}
        </p>
        <button onClick={handleClickReset} className="board-result-final-restart">
            Play Again
        </button>
    </div>
};

FinalResult.propTypes = {
    handleClickReset: PropTypes.func.isRequired
};

export default FinalResult;