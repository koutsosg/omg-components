import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const getRoutes = (links, pnf) => {
  const routes = links.map((link) => (
    <Route exact path={link.to}>
      {link.component}
    </Route>
  ));
  return [...routes, <Route path="*">{pnf.component}</Route>];
};

export const OmgNavigator = ({ links, container, pnf }) => {
  return <Router>{container(<Switch>{getRoutes(links, pnf)}</Switch>)}</Router>;
};
