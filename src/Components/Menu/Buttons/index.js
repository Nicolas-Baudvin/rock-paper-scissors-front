import cx from 'classnames';
import { useHistory } from 'react-router-dom';

const buttons = [
    {
        value: "IA",
        classname: "selected-red",
        text: "Play against AI"
    },
    {
        value: "Create",
        classname: "selected-blue",
        text: "Create a room"
    },
    {
        value: "Join",
        classname: "selected-yellow",
        text: "Join a room"
    }
];

const Buttons = ({ setSelected, username, selected }) => {
    const history = useHistory();

    const handleFocus = (gameType) => () => setSelected(gameType);

    const handleBlur = () => setSelected("");

    const handleClickNextPage = (gameType) => () => {
        localStorage.setItem("user", username);
        if (gameType === "IA")
        {
            return history.push("/game/vsIA/");
        }
        if (gameType === "Create")
        {
            return history.push("/game/create/");
        }
        if (gameType === "Join")
        {
            return history.push("/game/join/");
        }
    };

    return buttons.map((button, i) => (
        <button
            key={i}
            onBlur={handleBlur}
            onFocus={handleFocus(button.value)}
            onClick={handleClickNextPage(button.value)}
            className={cx("menu-button", { [button.classname]: selected === button.value })}
        >
            {button.text}
        </button>));
};

export default Buttons;