import { GET_BOOKS_PENDING, GET_BOOKS_FAİL, GET_BOOKS_SUCCESS } from "./types"

const initialstate = {
    data: [],
    loading: true,
    error: ''
}

export const booksReducer = (state = initialstate, action: any) => {
    switch (action.type) {
        case GET_BOOKS_PENDING: return {
            ...state,
            loading: true
        }
        case GET_BOOKS_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ''
        }
        case GET_BOOKS_FAİL: return {
            loading: false,
            data: [],
            error: action.payload
        }
        default: return state
    }
}