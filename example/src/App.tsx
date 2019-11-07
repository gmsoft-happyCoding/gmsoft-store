import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Alert } from 'antd';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import gmsoftStore from 'gmsoft-store';

import { stateContainer } from './utils';

// @ts-ignore
window.gmsoftStore = gmsoftStore;

const App = () => (
  <Provider store={stateContainer._store}>
    <Router history={stateContainer._history}>
      <Alert type="info" message="请访问window.gmsoftStore调试" />
    </Router>
  </Provider>
);

export default hot(App);
