interface Props {
  userShotType: string;
}

const OwnerPick = ({ userShotType }: Props) => {
  return (
    <div className="board-result-picked">
      <p>You picked</p>
      <div className={`board-result-${userShotType}`}>
        <img
          src={`${process.env.PUBLIC_URL}/img/icon-${userShotType}.svg`}
          alt={userShotType}
          className="board-result-picked-img"
        />
      </div>
    </div>
  );
};

export default OwnerPick;
