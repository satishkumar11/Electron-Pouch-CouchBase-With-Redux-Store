import { BUY_BOOK, SET_POUCH_DB_RESPONSE } from "./bookTypes"
import { combineState } from '../../utils/reducerUtils'
const initialState = {
    numOfBooks: 10,
    latestPouchDBResponse: {},
}

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            // console.log("state : " + JSON.stringify(state));
            return {
                ...state,
                numOfBooks: state.numOfBooks - 1,
            }
        case SET_POUCH_DB_RESPONSE:
            // console.log("state : " + JSON.stringify(state));
            return combineState(state, {
                latestPouchDBResponse: action.latestPouchDBResponse,
            });
        default:
            return state;
    }
}

export default bookReducer;