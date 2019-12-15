import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './components/App/App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';


const routes = (
  <Provider store={store}>
    <Router>
      <App>
        <Routes/>
      </App>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));

serviceWorker.unregister();
