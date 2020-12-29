const Header = ({ score, isOnline, users, owner, scores }) => {
    const username = localStorage.getItem('user');
    console.log(users, isOnline);
    return isOnline ? <header className="board-header">
        <div className="board-header-title">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Rock Paper Scissors" />
        </div>
        <div className="online-scores">
            {
                users.map((user, i) => <div key={i} className="board-header-score__item online-scores__item">
                    <p className="board-header-score__item--subtitle"> {user.username === username ? "You" : user.username} </p>
                    <div className="online-scores-nbr">
                        <p className="board-header-score__item--nbr">{scores[i]}</p>
                    </div>
                </div>)
            }

        </div>
    </header>
        : <header className="board-header">
            <div className="board-header-title">
                <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Rock Paper Scissors" />
            </div>
            <div className="board-header-score">
                <div className="board-header-score__item">
                    <p className="board-header-score__item--subtitle">score</p>
                    <p className="board-header-score__item--nbr">{score}</p>
                </div>
            </div>
        </header>
};

export default Header;