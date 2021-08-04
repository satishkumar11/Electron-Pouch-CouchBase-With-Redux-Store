import { BUY_BOOK, ADD_TO_POUCH } from "./bookTypes"

export const buyBook = () => {
    return {
        type: BUY_BOOK,
    }
}

export const addToPouch = () => {
    console.log("addToPouch");
    return {
        type: ADD_TO_POUCH,
    }
}