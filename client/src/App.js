import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import DataState from "./context/data/dataState";
import Home from "./components/Home";
import Register from "./components/Register";
import { testIt, getAccountId } from "./Helpers/transactions";
import "./App.css";

function App() {
  // getAccountId();
  testIt("5532164271822-fd17b52f-dc6", "owner");
  return (
    <AuthState>
      <DataState>
        <Router>
          <Fragment>
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </DataState>
    </AuthState>
  );
}

export default App;
