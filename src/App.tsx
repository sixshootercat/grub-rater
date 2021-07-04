import React, { FunctionComponent } from "react";
import { Provider } from "react-redux";
import { RestaurantScreen } from "./components";
import store from "./store";

const App: FunctionComponent = () => (
  <div>
    <Provider store={store}>
      <RestaurantScreen />
    </Provider>
  </div>
);

export default App;
