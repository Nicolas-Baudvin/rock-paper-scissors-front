import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { connectionToSocket, joinRoom } from "../../Store/Socket/actions";

import './style.scss';

const JoinRoom = () => {
    const { currentSocket, room } = useSelector(state => state.socket),
        history = useHistory(),
        dispatch = useDispatch(),
        [roomName, setRoomName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentSocket.connected && roomName)
        {
            console.log(currentSocket);
            dispatch(joinRoom(roomName));
        }
    };

    const handleChangeRoomName = (e) => {
        if (e.target.value.length > 20)
        {
            return;
        }
        setRoomName(e.target.value);
    };

    useEffect(() => {
        dispatch(connectionToSocket());
    }, []);

    useEffect(() => {
        console.log(room);
        if (room)
        {
            history.push(`/game/${room.name}`);
        }
    }, [room])

    return <div className="join">
        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="ROCK PAPER SCISSORS" />
        <h1>Join a room</h1>

        <form onSubmit={handleSubmit} action="">
            <input
                value={roomName}
                onChange={handleChangeRoomName}
                className="create-input"
                type="text"
                placeholder="Room name"
            />
            <button type="submit">
                Start
            </button>
        </form>
    </div>
};

export default JoinRoom;