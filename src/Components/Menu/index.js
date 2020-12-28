import cx from 'classnames';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Buttons from './Buttons';
import './style.scss';

const Menu = () => {
    const history = useHistory();
    const [selected, setSelected] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");


    const handleChange = (event) => {
        if (error)
        {
            setError("");
        }
        setUsername(event.target.value);
    };

    return <div className="menu">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
        <input value={username} onChange={handleChange} className={cx("menu-input", { error: Boolean(error) })} type="text" placeholder="Username" />
        <Buttons
            setSelected={setSelected}
            setError={setError}
            username={username}
            selected={selected}
        />
    </div>
};

export default Menu;