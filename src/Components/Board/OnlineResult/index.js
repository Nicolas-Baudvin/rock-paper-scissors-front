import OwnerPick from './OwnerPick';
import FriendPick from './FriendPick';
import FinalResult from './FinalResult';
import PropTypes from 'prop-types';

const OnlineResult = ({ userShotType, friendShotType, handleClickReset }) => {

    return <div className="board-result">
        <div className="board-result-container">
            <OwnerPick userShotType={userShotType} />
            <FriendPick friendShotType={friendShotType} />
        </div>
        {
            (userShotType && friendShotType) && <FinalResult handleClickReset={handleClickReset} />
        }
    </div>
};

OnlineResult.propTypes = {
    userShotType: PropTypes.string,
    friendShotType: PropTypes.string,
    handleClickReset: PropTypes.func.isRequired
};

export default OnlineResult;