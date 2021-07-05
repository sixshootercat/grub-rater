import {
  createStore, applyMiddleware, compose, Action,
} from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "./reducers";
import apiClient from "../api";
import { State } from "./restaurants/actions";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(apiClient) as ThunkMiddleware<
      State,
      Action,
      typeof apiClient
    >), devToolsEnhancer({}),
  ),
);

export default store;
