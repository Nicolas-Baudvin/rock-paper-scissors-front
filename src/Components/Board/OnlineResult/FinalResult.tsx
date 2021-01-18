import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";

interface Props {
  handleClickReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FinalResult = ({ handleClickReset }: Props) => {
  const { winner } = useSelector((state: RootState) => state.socket);
  return (
    <div className="board-result-final">
      <p className="board-result-final-text">
        {winner !== "equal" ? `Winner is ${winner}` : "Equality !"}
      </p>
      <button onClick={handleClickReset} className="board-result-final-restart">
        Play Again
      </button>
    </div>
  );
};

export default FinalResult;
