import OwnerPick from './OwnerPick';
import FriendPick from './FriendPick';
import FinalResult from './FinalResult';

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

export default OnlineResult;