
import {applyMiddleware, combineReducers, compose, createStore} from "redux";

import filtersReducer from "./filtersReducer";



let reducers = combineReducers({
    filters: filtersReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store