import { useSelector } from 'react-redux';
import { RootState } from '../../../Store/reducer';

interface Props {
    botShotType: string
}

const BotPick = ({ botShotType }: Props) => {
    const { isLoading } = useSelector((state: RootState) => state.offline);
    return <div className="board-result-botpicked">
        <p>The bot picked</p>
        {
            !isLoading && <div className={`board-result-${botShotType}`}>
                <img src={`${process.env.PUBLIC_URL}/img/icon-${botShotType}.svg`} alt={botShotType} />
            </div>
        }
        {
            isLoading && <div className="board-result-botpicked-loading">
                Waiting for bot ...
                </div>
        }
    </div>
};

export default BotPick;