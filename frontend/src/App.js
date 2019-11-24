import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Registration from './components/Registration';
import Edit from './components/Edit';
import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/edit" component={Edit} />
        </Switch>
      </section>
    </Fragment>
  </Router>
);
export default App;
