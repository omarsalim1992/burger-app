import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import OrderPreparing from './pages/OrderPreparing';
import NotFound404 from './pages/NotFound404';
import Header from './components/header';
import * as serviceWorker from './serviceWorker';
import Constants from './constants';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
const { pagePath } = Constants;

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route path={pagePath.HOME} exact component={Home} />
      <Route path={pagePath.ORDER_PREPARING} exact component={OrderPreparing} />
      <Route component={NotFound404} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
