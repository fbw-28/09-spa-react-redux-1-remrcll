import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Reducer } from "./Reducer.js";
import { Provider } from "react-redux";

const Reduxstore = createStore(Reducer);

ReactDOM.render(
  <Provider store={Reduxstore}>
    <App />
  </Provider>,
  document.getElementById('root')
);


