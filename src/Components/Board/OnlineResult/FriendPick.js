import { useSelector } from "react-redux";

const FriendPick = ({ friendShotType }) => {
    return <div className="board-result-botpicked">
        <p>{friendShotType.username} picked</p>
        {
            friendShotType && <div className={`board-result-${friendShotType.shotType}`}>
                <img src={`${process.env.PUBLIC_URL}/img/icon-${friendShotType.shotType}.svg`} alt="" />
            </div>
        }
        {
            !friendShotType && <div className="board-result-botpicked-loading">
                Waiting for your friend ...
                </div>
        }
    </div>
};

export default FriendPick;