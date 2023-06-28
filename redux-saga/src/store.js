import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { watchUserActions } from "./saga"

const sagaMiddleware = createSagaMiddleware()

//when 1st listening to the store it will be undifined so
//create the initial state
const initialState = {
    error: "",
    apiStatus: 'init',
    data: null
}

//reducer function is needed to create the store
//reducers always takes the state and action
function reducer(state = initialState, action){
    if(action.type === 'FETCH_SUCCESS'){
        return{
            ...state,
            apiStatus: 'success',
            data: action.payload
        }
    }
    return state
}

//create the store
export const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchUserActions)