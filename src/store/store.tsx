import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { booksReducer } from './reducers/reducers'

const rootreducer = combineReducers({ books: booksReducer })

const store = configureStore({ reducer: rootreducer, middleware: [thunk] });
export default store;