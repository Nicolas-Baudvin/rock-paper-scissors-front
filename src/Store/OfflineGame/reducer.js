import { LOADING, NEW_BOT_SHOT_TYPE, NEW_SCORE, NEW_SHOT, RESET_GAME, STOP_LOADING, NEW_WINNER } from "./actions";

const initialState = {
    userShotType: "",
    winner: "",
    score: 0,
    botShotType: "",
    isLoading: true
};

const Reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case NEW_SHOT: {
            return {
                ...state,
                userShotType: action.shotType
            };
        }
        case NEW_WINNER: {
            console.log(action);
            return {
                ...state,
                winner: action.winner
            };
        }
        case NEW_SCORE: {
            console.log(action);
            return {
                ...state,
                score: action.score
            };
        }
        case LOADING: {
            return {
                ...state,
                isLoading: true
            };
        }
        case STOP_LOADING: {
            return {
                ...state,
                isLoading: false
            };
        }
        case NEW_BOT_SHOT_TYPE: {
            return {
                ...state,
                botShotType: action.shotType
            };
        }
        case RESET_GAME: {
            return {
                ...state,
                userShotType: "",
                winner: "",
                botShotType: "",
                isLoading: true
            };
        }
        default:
            return state;
    }
};

export default Reducer;