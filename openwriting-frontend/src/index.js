import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';

import firebase from 'firebase';
import firebaseConfig from '../config/firebase';

import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

firebase.initializeApp(firebaseConfig);

const store = createStore(configureStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
