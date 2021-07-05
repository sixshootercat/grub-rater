import { STORE_RESTAURANTS } from "./actionTypes";
import { Restaurant } from "./types";

const storeRestaurants = (records: Restaurant[]) => ({
  type: STORE_RESTAURANTS,
  records,
});

export const loadRestaurants = () => (dispatch, getState, api) => {
  api.loadRestaurants().then((records) => {
    dispatch(storeRestaurants(records));
  });
};
