import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './state/store'
import {HashRouter} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}><App /></Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


