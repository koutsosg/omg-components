import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const getRoutes = (links) => {
  const routes = links.map((link) => (
    <Route exact path={link.to}>
      {link.component}
    </Route>
  ));
  return [
    ...routes,
    <Route path="*">
      <p>405</p>
    </Route>,
  ];
};

export const OmgNavigator = ({ links, container }) => {
  return (
    <Router>
      <Switch>{container(getRoutes(links))}</Switch>
    </Router>
  );
};
