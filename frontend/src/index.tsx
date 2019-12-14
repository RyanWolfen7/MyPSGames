import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';


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
