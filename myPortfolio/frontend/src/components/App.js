import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';

import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";

import Home from "./route-components/Home";
import JobDetail from "./route-components/JobDetail"

import Global from "./Styles";

class App extends Component {
  render() {
    return (
      <Provider store={store}>  
      <Router>
        <div>
          <Global />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/jobs">
              <JobDetail/>
            </Route>
          </Switch>
          <Footer
            style={{
              position: "fixed",
              bottom: "0",
              left: "0",
              width: "100%",
            }}
          />
        </div>
      </Router>   
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
