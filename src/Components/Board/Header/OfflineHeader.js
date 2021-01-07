import PropTypes from "prop-types";

const OfflineHeader = ({ score }) => {
    return <header className="board-header">
        <div className="board-header-title">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Rock Paper Scissors" />
        </div>
        <div className="board-header-score">
            <div className="board-header-score__item">
                <p className="board-header-score__item--subtitle">score</p>
                <p className="board-header-score__item--nbr">{score}</p>
            </div>
        </div>
    </header>
};

OfflineHeader.propTypes = {
    score: PropTypes.number.isRequired,
};

export default OfflineHeader;