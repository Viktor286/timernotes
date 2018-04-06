import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';
import combinedReducers from './reducers';

import styles from './css/index.less';

const store = createStore(
  combinedReducers
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);