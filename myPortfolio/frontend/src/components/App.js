import React, { Component, useContext } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { __RouterContext } from "react-router";
import { Provider } from "react-redux";
import store from "../store";

import Header from "./layout/header/header";
import Footer from "./layout/footer/footer";

import Home from "./route-components/Home";
import PZDetail from "./route-components/PromiseZoneDetail";
import HylanDetail from "./route-components/HylanDetail";
import ISBDCDetail from "./route-components/ISBDCDetail";
import SSNCDetail from "./route-components/SSnCDetail";
import JimbotDetail from "./route-components/Jimbot";
import TruthlabDetail from "./route-components/TruthlabDetail";

import Global from "./Styles";


import { animated, useTransition } from "react-spring";

function useRouter() {
  return useContext(__RouterContext);
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Global />
            <Header />
            <RouterMain />
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

const RouterMain = () => {
const { location } = useRouter();

  const routeTransitions = useTransition(location, (location) => location.key, {
    from: { opacity: 0, position:'absolute', width:'100%', transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0,0)'  },
    leave: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
  });

  
  console.log("location", location);
  return routeTransitions.map(({item, key, props: routerProps}) =>(
    <animated.div key={key} style={routerProps}>
      <Switch location={item}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/truthlab">
          <TruthlabDetail/>
        </Route>
        <Route exact path="/pz">
          <PZDetail/>
        </Route>
        <Route exact path="/isbdc">
          <ISBDCDetail/>
        </Route>
        <Route exact path="/jimbot">
          <JimbotDetail/>
        </Route>
        <Route exact path="/ssnc">
          <SSNCDetail/>
        </Route>
        <Route exact path="/hsc">
          <HylanDetail/>
        </Route>
      </Switch>
    </animated.div>
  ));
};

ReactDOM.render(<App />, document.getElementById("app"));
