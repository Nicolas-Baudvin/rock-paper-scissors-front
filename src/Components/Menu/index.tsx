import cx from "classnames";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../Store/Socket/actions";
import { getUsernameFromLocalStorage } from "../../Utils";
import Buttons from "./Buttons";
import "./style.scss";

const Menu = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const [username, setUsername] = useState<string>(
    getUsernameFromLocalStorage("user")
  );
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError("");
    }
    if (event.target.value.length > 10) {
      return setError("Username must have 10 chars max");
    }
    setUsername(event.target.value);
  };

  useEffect(() => {
    dispatch(logOut());
  }, []);

  return (
    <div className="menu">
      <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
      <input
        value={username}
        onChange={handleChange}
        className={cx("menu-input", { error: Boolean(error) })}
        type="text"
        placeholder="Username"
      />
      <p> {error} </p>
      {username && (
        <Buttons
          setSelected={setSelected}
          username={username}
          selected={selected}
        />
      )}
    </div>
  );
};

export default Menu;
