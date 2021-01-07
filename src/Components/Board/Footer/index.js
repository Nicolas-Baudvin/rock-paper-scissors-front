import { useHistory } from "react-router-dom";

const Footer = ({ handleClickRules }) => {
    const history = useHistory();

    const handleClickBackToMenu = () => history.push("/");

    return <div className="footer">
        <button onClick={handleClickRules} className="footer-button">
            Rules
        </button>
        <button onClick={handleClickBackToMenu} className="footer-button">
            Menu
        </button>
    </div>
};

export default Footer;