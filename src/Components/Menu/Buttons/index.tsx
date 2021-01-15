import { useHistory } from "react-router-dom";

const buttons = [
  {
    value: "IA",
    classname: "selected-red",
    text: "Play against AI",
  },
  {
    value: "Create",
    classname: "selected-blue",
    text: "Create a room",
  },
  {
    value: "Join",
    classname: "selected-yellow",
    text: "Join a room",
  },
];

interface Props {
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  selected: string;
}

interface PathByGameType {
  [index: string]: string;
}

const URLNameByGameType: PathByGameType = {
  IA: "/game/vsIA",
  Create: "/game/create/",
  Join: "/game/join/",
};

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
