import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../Store/reducer";
import { connectionToSocket, joinRoom } from "../../Store/Socket/actions";

import "./style.scss";

const JoinRoom = () => {
  const { currentSocket, room } = useSelector(
      (state: RootState) => state.socket
    ),
    history = useHistory(),
    dispatch = useDispatch(),
    [roomName, setRoomName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentSocket?.connected && roomName) {
      dispatch(joinRoom(roomName));
    }
  };

  const handleChangeRoomName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) {
      return;
    }
    setRoomName(e.target.value);
  };

  const handleClickMenu = () => history.push("/");

  useEffect(() => {
    dispatch(connectionToSocket());
  }, []);

  useEffect(() => {
    if (room) {
      history.push(`/game/${room.name}`);
    }
  }, [room]);

  return (
    <div className="join">
      <img
        src={`${process.env.PUBLIC_URL}/img/logo.svg`}
        alt="ROCK PAPER SCISSORS"
      />
      <h1>Join a room</h1>

      <form onSubmit={handleSubmit} action="">
        <input
          value={roomName}
          onChange={handleChangeRoomName}
          className="create-input"
          type="text"
          placeholder="Room name"
        />
        <button type="submit">Start</button>
      </form>
      <button onClick={handleClickMenu} className="button">
        Menu
      </button>
    </div>
  );
};

export default JoinRoom;
