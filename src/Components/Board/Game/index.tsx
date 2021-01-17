import arrayButton from "./utils/arrayButtons";

interface Props {
  handleClickShotType: (shotType: string) => void;
}

const Game = ({ handleClickShotType }: Props) => {
  return (
    <div className="board-game">
      <img
        className="board-game-pic"
        src={`${process.env.PUBLIC_URL}/img/bg-triangle.svg`}
        alt="Board"
      />

      {arrayButton.map((button, index) => (
        <div
          key={index}
          onClick={() => handleClickShotType(button.shotType)}
          className={button.classname}
        >
          <img src={`${process.env.PUBLIC_URL}/img/icon-${button.shotType}.svg`} alt={button.shotType} />
        </div>
      ))}
    </div>
  );
};

export default Game;
