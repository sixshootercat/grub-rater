import { ThunkAction } from "redux-thunk";
import apiClient from "../../api";
import { STORE_RESTAURANTS } from "./actionTypes";
import { Action, Restaurant } from "./types";

export type State = {
  records: Restaurant[];
};

type ThunkResult<R> = ThunkAction<R, State, typeof apiClient, Action>;

const storeRestaurants = (records: Restaurant[]) => ({
  type: STORE_RESTAURANTS,
  records,
});

export const loadRestaurants = (): ThunkResult<void> => (dispatch, _getState, _api) => {
  _api.loadRestaurants().then((records) => {
    dispatch(storeRestaurants(records) as any);
  });
};
