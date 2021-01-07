import OfflineHeader from "./OfflineHeader";
import OnlineHeader from "./OnlineHeader";
import PropTypes from "prop-types";

const Header = ({ score, isOnline, users, scores }) => {
    return isOnline ? <OnlineHeader users={users} scores={scores} />
        : <OfflineHeader score={score} />
};

Header.propTypes = {
    score: PropTypes.number,
    isOnline: PropTypes.bool,
    users: PropTypes.array,
    scores: PropTypes.object
};

export default Header;