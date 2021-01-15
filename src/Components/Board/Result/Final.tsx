import { useSelector } from "react-redux";
import { RootState } from "../../../Store/reducer";

interface Props {
  handleClickReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Final = ({ handleClickReset }: Props) => {
  const { winner } = useSelector((state: RootState) => state.offline);
  return (
    <div className="board-result-final">
      <p>
        {winner && winner !== "equal"
          ? "You win !"
          : winner === "equal"
          ? "Equality"
          : "You loose"}
      </p>
      <button onClick={handleClickReset} className="board-result-final-restart">
        Play Again
      </button>
    </div>
  );
};

export default Final;
