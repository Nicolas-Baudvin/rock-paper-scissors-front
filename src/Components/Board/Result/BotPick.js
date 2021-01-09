import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const BotPick = ({ botShotType }) => {
    const { isLoading } = useSelector((state) => state.offline);
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
    botShotType: PropTypes.string.isRequired
};

export default BotPick;