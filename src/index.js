import React from "react";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import App from "./App";
import * as reducers from "./state/reducers";

import "bulma/css/bulma.css";
import "./styles.scss";

// STUDENTS SUFFER WITH THIS !!!!!!!!! (4)
const monsterReducer = combineReducers({
  // the key is the real name for the slice
  vehicle: reducers.vehicleReducer
});

// feed the createStore the combined reducer (5)
const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// inject the store into the provider (6)
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
