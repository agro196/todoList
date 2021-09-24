import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ItemService from "./services/item-service";
import { ItemServiceProvider } from "./components/item-service-context";
import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

const itemService = new ItemService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ItemServiceProvider value={itemService}>
        <App />
      </ItemServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
