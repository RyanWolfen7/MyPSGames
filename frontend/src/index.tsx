import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const routes = (
  <Provider store={store}>
    <Router>
      <App>
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
