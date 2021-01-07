import { NEW_WINNER } from "../Socket/actions";
import { INCREMENT_SCORE, NEW_SHOT } from "./actions";

const Middleware = (store) => (next) => (action) => {
    switch (action.type)
    {
        case NEW_SHOT: {
            next(action);
            break;
        }
        case NEW_WINNER: {
            next(action);
            break;
        }
        case INCREMENT_SCORE: {
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