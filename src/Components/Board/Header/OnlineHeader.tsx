import PropTypes from "prop-types";
import { Score, User } from "./types";

interface Props {
    users: Array<User> | undefined,
    scores: Score | undefined
}

const OnlineHeader = ({ users, scores }: Props) => {
    const username = localStorage.getItem("user");

    return <header className="board-header">
        <div className="board-header-title">
            <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="Rock Paper Scissors" />
        </div>
        <div className="online-scores">
            {
                users && users.map((user, i) => <div key={i} className="board-header-score__item online-scores__item">
                    <p className="board-header-score__item--subtitle"> {user.username === username ? "You" : user.username} </p>
                    <div className="online-scores-nbr">
                        <p className="board-header-score__item--nbr">{scores && scores[user.username]}</p>
                    </div>
                </div>)
            }

        </div>
    </header>
};

OnlineHeader.propTypes = {
    users: PropTypes.array.isRequired,
    scores: PropTypes.object.isRequired
};

export default OnlineHeader;