import { configureStore } from '@reduxjs/toolkit'
import stateReducer from "./stateReducer";

export default configureStore({
    reducer: {
        state: stateReducer
    },
})
