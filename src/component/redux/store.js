import { applyMiddleware, legacy_createStore as createStore}  from "redux";
import { todoReducer } from "./todoReducer";
import { thunk } from "redux-thunk";


const store = createStore(todoReducer , applyMiddleware(thunk))

export default store
