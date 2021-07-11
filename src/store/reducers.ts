import { combineReducers } from "redux";
import { restaurants } from "./restaurants/reducers";

export interface AppState {
  restaurants: ReturnType<typeof restaurants>
}

const rootReducer = combineReducers({ restaurants });

export default rootReducer;
