import Footer from "./Footer";
import { useState } from "react";
import Modale from "./Modale";
import { useSelector } from "react-redux";
import OnlineBoard from "./OnlineBoard";
import OfflineBoard from "./OfflineBoard";
import "./style.scss";
import { RootState } from "../../Store/reducer";

const Board = () => {
  const { room } = useSelector((state: RootState) => state.socket);
  const [showRules, setShowRules] = useState(false);

  const handleClickRules = () => setShowRules(!showRules);

  return (
    <main className="board">
      {room && <OnlineBoard />}
      {!room && <OfflineBoard />}
      <Footer handleClickRules={handleClickRules} />
      {showRules && <Modale handleClickRules={handleClickRules} />}
    </main>
  );
};

export default Board;
