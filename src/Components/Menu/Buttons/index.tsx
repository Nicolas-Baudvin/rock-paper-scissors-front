import { useHistory } from "react-router-dom";
import { Props } from "../types";
import { buttons, URLNameByGameType } from "./utils";

const Buttons = ({ setSelected, username, selected }: Props) => {
  const history = useHistory();

  const handleFocus = (gameType: string) => () => setSelected(gameType);

  const handleBlur = () => setSelected("");

  const handleClickNextPage = (gameType: string) => () => {
    localStorage.setItem("user", username);
    return history.push(URLNameByGameType[gameType]);
  };

  return (
    <>
      {buttons.map((button, i) => (
        <button
          key={i}
          onBlur={handleBlur}
          onFocus={handleFocus(button.value)}
          onClick={handleClickNextPage(button.value)}
          className={"menu-button"}
        >
          {button.text}
        </button>
      ))}
    </>
  );
};

export default Buttons;
