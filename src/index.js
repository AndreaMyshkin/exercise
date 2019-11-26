import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import App from "./app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(
  createStore
);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
