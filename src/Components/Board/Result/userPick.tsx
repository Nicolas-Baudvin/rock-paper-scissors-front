import PropTypes from 'prop-types';

interface Props {
    userShotType: string
};

const UserPick = ({ userShotType }: Props) => {
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