import {combineReducers, createStore} from 'redux'
import stateReducer from "./stateReducer";

const reducers = combineReducers({
    state: stateReducer
})

export const store = createStore(reducers)
