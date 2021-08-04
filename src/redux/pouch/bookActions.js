import { BUY_BOOK, ADD_TO_POUCH, SET_POUCH_DB_RESPONSE } from "./bookTypes"

export const buyBook = () => {
    return {
        type: BUY_BOOK,
    }
}

export const addToPouch = () => {
    return {
        type: ADD_TO_POUCH,
    }
}

export const setPouchDBResponse = latestPouchDBResponse => {
    return {
        type: SET_POUCH_DB_RESPONSE,
        latestPouchDBResponse,
    }
}