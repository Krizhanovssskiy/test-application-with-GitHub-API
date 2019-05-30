import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';

import 'normalize.css';
import './index.css';
import App from './components/app'
import ErrorBoundry from './components/error-boundry';

const store = createStore(reducers);


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

