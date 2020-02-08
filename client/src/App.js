import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from './context/auth/AuthState';
import DataState from './context/data/dataState';
import Home from './components/Home';
import Register from './components/Register';
import Transactions from './components/Transactions';
import './App.css';

function App() {
  return (
    <AuthState>
    <DataState>
      <Router>
        <Fragment>
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
            </Switch>
            <Transactions />
          </div>
        </Fragment>
      </Router>
    </DataState>
  </AuthState>
  );
}

export default App;
