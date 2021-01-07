import PropTypes from 'prop-types';

const UserPick = ({ userShotType }) => {
    return <div className="board-result-picked">
        <p>You picked</p>
        <div className={`board-result-${userShotType}`}>
            <img src={`${process.env.PUBLIC_URL}/img/icon-${userShotType}.svg`} alt="" />
        </div>
    </div>
};

UserPick.propTypes = {
    userShotType: PropTypes.string.isRequired
};

export default UserPick;