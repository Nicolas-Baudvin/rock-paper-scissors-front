import { FriendShotInfo } from "../../../Store/Socket/types";

interface Props {
  friendShotType: FriendShotInfo | undefined;
}

const FriendPick = ({ friendShotType }: Props) => {
  return (
    <div className="board-result-botpicked">
      <p>{friendShotType && friendShotType.username} picked</p>
      {friendShotType && (
        <div className={`board-result-${friendShotType.shotType}`}>
          <img
            src={`${process.env.PUBLIC_URL}/img/icon-${friendShotType.shotType}.svg`}
            alt=""
          />
        </div>
      )}
      {!friendShotType?.shotType && (
        <div className="board-result-botpicked-loading">
          Waiting for your friend ...
        </div>
      )}
    </div>
  );
};

export default FriendPick;
