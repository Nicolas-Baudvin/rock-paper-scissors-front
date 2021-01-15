import OfflineHeader from "./OfflineHeader";
import OnlineHeader from "./OnlineHeader";
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

export default Header;