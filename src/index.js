import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import counterReducer from './reducer/counterReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(counterReducer)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
