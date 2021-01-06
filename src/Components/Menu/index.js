import cx from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../Store/Socket/actions';
import Buttons from './Buttons';
import './style.scss';

const Menu = () => {
    const dispatch = useDispatch();
    const [selected, setSelected] = useState("");
    const [username, setUsername] = useState(localStorage.getItem("user") ? localStorage.getItem("user") : "");
    const [error, setError] = useState("");


    const handleChange = (event) => {
        if (error)
        {
            setError("");
        }
        setUsername(event.target.value);
    };

    useEffect(() => {
        dispatch(logOut());
    }, [])

    return <div className="menu">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
        <input value={username} onChange={handleChange} className={cx("menu-input", { error: Boolean(error) })} type="text" placeholder="Username" />
        {
            username && <Buttons
                setSelected={setSelected}
                username={username}
                selected={selected}
            />
        }
    </div>
};

export default Menu;