import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  promise from "redux-promise";
import reducers from "./reducers";

import CakesIndex from "./components/cakes_index";
import CakesNew from "./components/cakes_new";
import CakesShow from "./components/cake_show";

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <h1>CAKES R US</h1>
        <Switch>
          <Route path="/cakes/new" component={CakesNew} />
          <Route path="/cakes/:id" component={CakesShow} />
          <Route path="/" component={CakesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
