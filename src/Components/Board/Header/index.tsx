import OfflineHeader from "./OfflineHeader";
import OnlineHeader from "./OnlineHeader";
import PropTypes from "prop-types";
import { Score, User } from "./types";

interface Props {
    isOnline?: Boolean,
    users?: Array<User>,
    scores?: Score
}

const Header = ({ isOnline, users, scores }: Props) => {
    return isOnline ? <OnlineHeader users={users} scores={scores} />
        : <OfflineHeader />
};

Header.propTypes = {
    score: PropTypes.number,
    isOnline: PropTypes.bool,
    users: PropTypes.array,
    scores: PropTypes.object
};

export default Header;