import OwnerPick from "./OwnerPick";
import FriendPick from "./FriendPick";
import FinalResult from "./FinalResult";
import { FriendShotInfo } from "../../../Store/Socket/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";

interface Props {
  userShotType: string;
  friendShotType: FriendShotInfo | undefined;
  handleClickReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const OnlineResult = ({
  userShotType,
  friendShotType,
  handleClickReset,
}: Props) => {
  const { winner } = useSelector((state: RootState) => state.socket);
  return (
    <div className="board-result">
      <div className="board-result-container">
        <OwnerPick userShotType={userShotType} />
        <FriendPick friendShotType={friendShotType} />
      </div>
      {winner && userShotType && friendShotType && (
        <FinalResult handleClickReset={handleClickReset} />
      )}
    </div>
  );
};

export default OnlineResult;
