const OnlineHeader = ({ users, scores }) => {
    const username = localStorage.getItem("user");

    return <header className="board-header">
        <div className="board-header-title">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Rock Paper Scissors" />
        </div>
        <div className="online-scores">
            {
                users.map((user, i) => <div key={i} className="board-header-score__item online-scores__item">
                    <p className="board-header-score__item--subtitle"> {user.username === username ? "You" : user.username} </p>
                    <div className="online-scores-nbr">
                        <p className="board-header-score__item--nbr">{scores[user.username]}</p>
                    </div>
                </div>)
            }

        </div>
    </header>
};

export default OnlineHeader;