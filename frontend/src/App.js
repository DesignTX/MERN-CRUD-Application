import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Registration from './components/Registration';
import Edit from './components/Edit';
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
          <Switch>
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/edit" component={Edit} />
          </Switch>
        </section>
      </>
    </Router>
  </Provider>
);

export default App;
