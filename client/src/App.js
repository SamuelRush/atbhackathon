import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from './context/auth/AuthState';
import DataState from './context/data/dataState';
import Home from './components/Home';
import Goals from './components/Goals/Goals';
import Navbar from './components/nav/Nav';
import ChatBot from "./components/ChatBot/ChatBot";
import './App.css';

function App() {
  return (
    <AuthState>
    <DataState>
      <Router>
        <Fragment>
          <div className='container'>
          <Navbar />
            <ChatBot />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/goals' component={Goals} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </DataState>
  </AuthState>
  );
}

export default App;
