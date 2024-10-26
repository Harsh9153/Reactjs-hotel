import{createStore,combineReducers,applyMiddleware} from "redux"
import { UserReducers } from "./Reducers/UserReducers"
import { thunk } from "redux-thunk";
import { CartReducers } from "./Reducers/CardREducers";


const rootReducer =combineReducers({
    UserReducers,
    CartReducers
})

export const store =createStore(rootReducer,applyMiddleware(thunk));