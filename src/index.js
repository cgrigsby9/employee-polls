import React from 'react';
import ReactDOM from 'react-dom/client';
import './layout/index.css';
import App from './components/App';
import middleware from "./middleware";
import reducer from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
        <App />
    </Router>
  </Provider>,
);