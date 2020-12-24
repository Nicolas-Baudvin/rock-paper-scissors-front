const Final = ({ isUserWin, handleClickReset }) => {
    return <div className="board-result-final">
        <p>
            {
                isUserWin && isUserWin !== "equal" ? "You win !" : isUserWin === "equal" ? "Equality" : "You loose"
            }
        </p>
        <button onClick={handleClickReset} className="board-result-final-restart">
            Play Again
            </button>
    </div>
};

export default Final;