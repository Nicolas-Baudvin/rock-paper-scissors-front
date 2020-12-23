import cx from 'classnames';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './style.scss';

const Menu = () => {
    const history = useHistory();
    const [selected, setSelected] = useState("");

    const handleFocus = (gameType) => () => {
        setSelected(gameType);
    };

    const handleBlur = () => {
        setSelected("");
    }

    const handleClickNextPage = (gameType) => () => {
        if (gameType === "IA")
        {
            history.push("/game/vsIA/");
        }
        else {
            // TODO: Fetch and creating a room
        }
    };

    return <div className="menu">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
        <input className="menu-input" type="text" placeholder="Username" />
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