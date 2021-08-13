import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import MainDashboard from "./pages/dashboard"
export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MainDashboard} exact />
      </Switch>
    );
  }
}

export default Routes;
