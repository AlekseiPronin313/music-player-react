import {combineReducers, createStore} from 'redux'
import stateReducer from "./stateReducer";

const reducers = combineReducers({
    data: stateReducer
})

export const store = createStore(reducers)
