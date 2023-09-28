import { GET_BOOKS_SUCCESS, GET_BOOKS_FAİL, GET_BOOKS_PENDING } from "./types"
import axios from 'axios'

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
        axios.get('https://my-json-server.typicode.com/kyhnlbyrk/fake-api/db').then(res => {
            let books = res.data.books
            dispatch(getBooksSuccess(books))
        }).catch(err => {
            dispatch(getBooksFail(err.message))
        })

    }
}