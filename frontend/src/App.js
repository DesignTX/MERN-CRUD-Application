import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import CustomerForm from './components/CustomerForm';
import CustomerEdit from './components/CustomerEdit';
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
            <Route exact path="/customerEdit/:id" component={CustomerEdit} />
            <Route exact path="/customerForm" component={CustomerForm} />
            <Route exact path="/customerList" component={Customers} />
          </Switch>
        </section>
      </>
    </Router>
  </Provider>
);

export default App;
