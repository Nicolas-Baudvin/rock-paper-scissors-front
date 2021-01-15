import { useEffect } from "react";
import BotPick from "./BotPick";
import Final from "./Final";
import UserPick from "./userPick";
import { newShot } from "../../../Store/OfflineGame/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";

interface Props {
  userShotType: string;
  handleClickReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Result = ({ userShotType, handleClickReset }: Props) => {
  const dispatch = useDispatch();
  const { botShotType, isLoading } = useSelector(
    (state: RootState) => state.offline
  );
  useEffect(() => {
    dispatch(newShot(userShotType));
  }, []);

  return (
    <div className="board-result">
      <div className="board-result-container">
        <UserPick userShotType={userShotType} />
        <BotPick botShotType={botShotType} />
      </div>
      {!isLoading && <Final handleClickReset={handleClickReset} />}
    </div>
  );
};

export default Result;
