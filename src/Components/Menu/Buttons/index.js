import cx from 'classnames';
import { useHistory } from 'react-router-dom';

const Buttons = ({ setSelected, setError, username, selected }) => {
    const history = useHistory();
    const handleFocus = (gameType) => () => {
        setSelected(gameType);
    };

    const handleBlur = () => {
        setSelected("");
    };

    const handleClickNextPage = (gameType) => () => {
        if (!username)
        {
            return setError("Username required");
        }
        if (gameType === "IA")
        {
            localStorage.setItem("user", username);
            history.push("/game/vsIA/");

            return;
        }
        if (gameType === "Create")
        {
            localStorage.setItem("user", username);
            history.push("/game/create/");
            return;
        }
    };
    return <>
        <button
            onBlur={handleBlur}
            onFocus={handleFocus("IA")}
            onClick={handleClickNextPage("IA")}
            className={cx("menu-button", { "selected-red": selected === "IA" })}
        >
            Play against AI
        </button>

        <button
            onBlur={handleBlur}
            onFocus={handleFocus("Create")}
            onClick={handleClickNextPage("Create")}
            className={cx("menu-button", { "selected-blue": selected === "Create" })}
        >
            Create a room
        </button>

        <button
            onBlur={handleBlur}
            onFocus={handleFocus("Join")}
            onClick={handleClickNextPage("Join")}
            className={cx("menu-button", { "selected-yellow": selected === "Join" })}
        >
            Join a Room
        </button>
    </>
};

export default Buttons;