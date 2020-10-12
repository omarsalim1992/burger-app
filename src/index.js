import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import store from './store';
import OrderPreparing from './pages/OrderPreparing';
import NotFound404 from './pages/NotFound404';
import Header from './components/header';
import Loader from './components/loader';
import * as serviceWorker from './serviceWorker';
import Constants from './constants';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
const { pagePath } = Constants;

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Loader />
        <Switch>
          <Route path={pagePath.HOME} exact component={Home} />
          <Route path={pagePath.ORDER_PREPARING} exact component={OrderPreparing} />
          <Route component={NotFound404} />
        </Switch>
      </Router>
    </Provider>
  </StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
