import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Registration from './components/Registration';
import Edit from './components/Edit';
import Customers from './components/Customers';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/customerList" component={Customers} />
          </Switch>
        </section>
      </>
    </Router>
  </Provider>
);

export default App;
