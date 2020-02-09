import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from './context/auth/AuthState';
import DataState from './context/data/dataState';
import Home from './components/Home';
import Goals from './components/Goals/Goals';
import Navbar from './components/nav/Nav';
import Sidebar from './components/Sidebar';
import ChatBot from "./components/ChatBot/ChatBot";
import './App.css';

function App() {
  // getAccountId();
  // testIt("5532164271822-fd17b52f-dc6", "owner");
  const [chatOpened, setChatOpened] = useState(false);
  const toggleFloating = () => setChatOpened(!chatOpened);
  return (
    <AuthState>
    <DataState>
      <Router>
        <Fragment>
          <div className='container layout'>
            <Navbar />
            <Sidebar />
            <header
              style={{ "gridArea": "content-header" }}
              className="content-header"
            >
              Welcome Oleks
            </header>
            <main style={{ "gridArea": "main", padding: 40 }}>
              <ChatBot chatOpened={chatOpened} toggleFloating={toggleFloating} />
              <Switch>
                <Route exact path='/' render={() => <Home toggleFloating={toggleFloating} />} />
                <Route exact path='/goals' component={Goals} />
              </Switch>
            </main>
          </div>
        </Fragment>
      </Router>
    </DataState>
  </AuthState>
  );
}

export default App;
