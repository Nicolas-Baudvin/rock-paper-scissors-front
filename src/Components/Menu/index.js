import cx from 'classnames';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const Menu = () => {
    const history = useHistory();
    const [selected, setSelected] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handleFocus = (gameType) => () => {
        setSelected(gameType);
    };

    const handleBlur = () => {
        setSelected("");
    }

    const handleChange = (event) => {
        if (error)
        {
            setError("");
        }
        setUsername(event.target.value);
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
        }
        else {
            localStorage.setItem("user", username);
            // TODO: Fetch and creating a room
        }
    };

    return <div className="menu">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
        <input value={username} onChange={handleChange} className={cx("menu-input", { error: Boolean(error) })} type="text" placeholder="Username" />
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
    </div>
};

export default Menu;