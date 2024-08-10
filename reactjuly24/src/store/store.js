import { combineReducers, createStore } from "redux";
import CountReducer from "../reducers/CountReducer"
import TodoReducer from "../reducers/TodosReducer";

let store = createStore(
    combineReducers({count:CountReducer,todos:TodoReducer}),
 );
export default store;