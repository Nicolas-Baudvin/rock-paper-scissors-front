import { useHistory } from "react-router-dom";
import './style.scss';

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => history.push("/");

    return <div className="notfound">
        <p>404</p>
        <button onClick={handleClick} className="button">
            Menu
        </button>
    </div>
};

export default NotFound;