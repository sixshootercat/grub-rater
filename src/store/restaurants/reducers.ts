import { combineReducers } from "redux";
import { Action, Restaurant } from "./types";
import { STORE_RESTAURANTS } from "./actionTypes";

const initialState: Restaurant[] = [];

const records = (state = initialState, action: Action) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    default:
      return state;
  }
};

export const restaurants = combineReducers({
  records,
});
