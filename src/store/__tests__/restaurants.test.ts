import { applyMiddleware, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { loadRestaurants, State } from "../restaurants/actions";
import { restaurants } from "../restaurants/reducers";
import { Action } from "../restaurants/types";

describe("restaurants", () => {
  describe("loadRestaurants action", () => {
    it("stores the restaurants", async () => {
      const records = [
        { id: 1, name: "Sushi Place" },
        { id: 2, name: "Pizza Place" },
      ];

      const api = {
        loadRestaurants: () => Promise.resolve(records),
      };

      const initialState = {
        records: [],
      };

      const store = createStore(
        restaurants,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api) as ThunkMiddleware<
          State,
          Action,
          typeof api
        >),
      );

      await store.dispatch(loadRestaurants());

      expect(store.getState().records).toEqual(records);
    });
  });
});
