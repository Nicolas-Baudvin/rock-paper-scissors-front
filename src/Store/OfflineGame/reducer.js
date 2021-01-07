import { NEW_WINNER } from "../Socket/actions";
import { INCREMENT_SCORE, NEW_SHOT } from "./actions";

const initialState = {
    userShotType: "",
    winner: "",
    score: 0
}

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
            return {
                ...state,
                winner: action.winner
            };
        }
        case INCREMENT_SCORE: {
            return {
                ...state,
                score: state.score + 1
            };
        }
        default:
            return state;
    }
};

export default Reducer;