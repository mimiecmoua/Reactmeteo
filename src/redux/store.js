import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cityReducer from './citySlice.js'
import langReducer from './langSlice.js'

export const rootReducer = combineReducers({
    city : cityReducer,
    lang : langReducer
})

export const store = configureStore({
    reducer : rootReducer
})

