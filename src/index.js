import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Switch, Route} from "react-router-dom";

const routes = (
  <BrowserRouter>
  <Header/>
    <div>
    <Switch>
      <Route path="/" component={Home} exact={true} />
      <Route path="/explore" component={Explore} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
