/**
 * browser
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { fromJS } from 'immutable';

import routes from '../common/routes';
import configureStore from '../common/store';

// 从 server 取得传进来的 initialState。由于从字串转回物件，又称为 rehydration（覆水）
const initialState = window.__PRELOADED_STATE__;

// 由于我们使用 ImmutableJS，所以需要把在 server-side dehydration（脱水）
// 又在前端 rehydration（补水）的 initialState 转成 ImmutableJS 资料型态，并传进 configureStore 建立 store
const store = configureStore(fromJS(initialState));


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'),
);
