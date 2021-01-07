import PropTypes from 'prop-types';

const BotPick = ({ isLoading, botShotType }) => {
    return <div className="board-result-botpicked">
        <p>The bot picked</p>
        {
            !isLoading && <div className={`board-result-${botShotType}`}>
                <img src={`${process.env.PUBLIC_URL}/img/icon-${botShotType}.svg`} alt={botShotType} />
            </div>
        }
        {
            isLoading && <div className="board-result-botpicked-loading">
                Waiting for bot ...
                </div>
        }
    </div>
};

BotPick.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    botShotType: PropTypes.string.isRequired
};

export default BotPick;