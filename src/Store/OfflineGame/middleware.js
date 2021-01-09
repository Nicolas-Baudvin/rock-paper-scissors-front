import { newWinner, NEW_SCORE, NEW_SHOT, newScore, newBotShotType, stopLoading, RESET_GAME } from "./actions";
import { GameEngine, BotEngine } from "../../GameEngine";

const Bot = new BotEngine();
const Engine = new GameEngine();

const Middleware = (store) => (next) => (action) => {
    switch (action.type)
    {
        case NEW_SHOT: {
            Bot.shot();

            const userShotType = action.shotType;
            const botShotType = Bot.getShotType();

            Engine.setBotShotType(botShotType);
            Engine.setUserShotType(userShotType);
            
            const isPlayerWon = Engine.getWinner();            
            const score = Engine.getScore();
                        
            setTimeout(() => {
                store.dispatch(newBotShotType(botShotType));
                store.dispatch(newWinner(isPlayerWon));
                store.dispatch(newScore(score));
                store.dispatch(stopLoading());
            }, 1000);
            
            next(action);
            break;
        }
        case RESET_GAME: {
            Engine.replay();
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