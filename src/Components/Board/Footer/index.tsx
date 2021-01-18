import { useHistory } from "react-router-dom";

interface Props {
  handleClickRules: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Footer = ({ handleClickRules }: Props) => {
  const history = useHistory();

  const handleClickBackToMenu = () => history.push("/");

  return (
    <div className="footer">
      <button onClick={handleClickRules} className="footer-button rules">
        Rules
      </button>
      <button onClick={handleClickBackToMenu} className="footer-button menu">
        Menu
      </button>
    </div>
  );
};

export default Footer;
