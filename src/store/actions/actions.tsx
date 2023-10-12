import { GET_BOOKS_SUCCESS, GET_BOOKS_FAİL, GET_BOOKS_PENDING } from "../types"
import API from '../service';

const getBooksPending = () => {
    return {
        type: GET_BOOKS_PENDING
    }
}

const getBooksSuccess = (data: []) => {
    return {
        type: GET_BOOKS_SUCCESS,
        payload: data
    }
}

const getBooksFail = (err: any) => {
    return {
        type: GET_BOOKS_FAİL,
        payload: err
    }
}

export const getBooksList = () => {
    return (dispatch: any) => {
        dispatch(getBooksPending);
        API.get('/db').then(res => {
            let books = res.data.books
            dispatch(getBooksSuccess(books))
        }).catch(err => {
            dispatch(getBooksFail(err.message))
        })

    }
}