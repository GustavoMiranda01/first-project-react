import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom@5-dom";

import Home from "./containers/home";
import Users from "./containers/users";

function Routes() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/usuarios" component={Users} />
    </Router>
  );
}

export default Routes;
