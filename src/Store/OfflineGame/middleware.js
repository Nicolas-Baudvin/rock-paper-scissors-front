import { newWinner, NEW_SHOT, newScore, newBotShotType, stopLoading, REPLAY_GAME } from "./actions";
import { GameEngine, BotEngine } from "../../GameEngine";

const bot = new BotEngine();
const gameEngine = new GameEngine();

const Middleware = (store) => (next) => (action) => {
    switch (action.type)
    {
        case NEW_SHOT: {
            bot.shot();

            const userShotType = action.shotType;
            const botShotType = bot.getShotType();

            gameEngine.setBotShotType(botShotType);
            gameEngine.setUserShotType(userShotType);
            gameEngine.checkWinner();
            
            const isPlayerWon = gameEngine.getWinner();            
            const score = gameEngine.getScore();
                        
            setTimeout(() => {
                store.dispatch(newBotShotType(botShotType));
                store.dispatch(newWinner(isPlayerWon));
                store.dispatch(newScore(score));
                store.dispatch(stopLoading());
            }, 1000);
            
            next(action);
            break;
        }
        case REPLAY_GAME: {
            gameEngine.replay();
            next(action);
            break;
        }
        default: {
            next(action);
            break;
        }
    }
};

export default Middleware;