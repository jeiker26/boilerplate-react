import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";

const initBase = { path: "/" };

export const RouterWrapper = ({ match = initBase, router }) => {
  return (
    <Switch>
      {router.component && <Route exact path={`${match.path}`} component={router.component} />}
      {router.childrens.map(section => (
        <Route
          key={section.route}
          path={
            match.path === initBase.path ? `${section.route}` : `${match.path}${section.route}`
          }
          component={section.component}
        />
      ))}
      {router.notFound && <Route component={router.notFound} />}
    </Switch>
  );
};
