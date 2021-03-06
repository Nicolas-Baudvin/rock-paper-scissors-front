import { useSelector } from "react-redux";
import classnames from "classnames";
import "./style.scss";
import { RootState } from "../../Store/reducer";

const Popup = () => {
  const { error, showError } = useSelector((state: RootState) => state.socket);
  const classes = classnames("popup-error", {
    "error-show": showError,
    "error-hide": !showError,
  });

  return (
    <div className={classes}>
      <img src={`${process.env.PUBLIC_URL}/img/information.png`} alt="error" />
      <p> {error} </p>
    </div>
  );
};

export default Popup;
