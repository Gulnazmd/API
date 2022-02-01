import { createStore, combineReducers } from "redux"
import { pagesReducer } from "./pagesReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  currentPage: pagesReducer,
  users: usersReducer
})

const store = createStore(rootReducer)

export default store;
