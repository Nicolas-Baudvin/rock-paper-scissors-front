import PropTypes from 'prop-types';

interface Props {
    userShotType: string
}

const OwnerPick = ({ userShotType }: Props) => {
    return <div className="board-result-picked">
        <p>You picked</p>
        <div className={`board-result-${userShotType}`}>
            <img src={`${process.env.PUBLIC_URL}/img/icon-${userShotType}.svg`} alt="" />
        </div>
    </div>
};

OwnerPick.propTypes = {
    userShotType: PropTypes.string.isRequired
};

export default OwnerPick;