import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { CounterAction, ICountersState } from "./interfaces";
import { createStore, Store } from 'redux';
import { rootReducer } from "./store/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import './index.css';

const store: Store<ICountersState, CounterAction> = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
