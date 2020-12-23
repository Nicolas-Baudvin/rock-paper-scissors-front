const Footer = ({ handleClickRules }) => {
    return <div className="footer">
        <button onClick={handleClickRules} className="rules">
            Rules
        </button>
    </div>
};

export default Footer;