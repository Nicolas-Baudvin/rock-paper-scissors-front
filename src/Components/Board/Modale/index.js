const Modale = ({ handleClickRules }) => {
    return <div className="modale">
        <img onClick={handleClickRules} className="modale-close" src={`${process.env.PUBLIC_URL}/img/icon-close.svg`} alt="fermer" />
        <img className="modale-rules" src={`${process.env.PUBLIC_URL}/img/image-rules.svg`} alt="" />
    </div>
};

export default Modale;