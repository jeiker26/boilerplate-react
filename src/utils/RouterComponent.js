import React from "react";
import { Route } from "react-router";
import { Switch } from "react-router-dom";

export const RouterWrapper = ({ match, router }) => {
  console.log("router");
  console.log(router);
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={router.component} />
      {router.childrens.map(section => (
        <Route
          key={section.route}
          path={match.path === "/" ? `${section.route}` : `${match.path}${section.route}`}
          component={section.component}
        />
      ))}
      {router.notFound && <Route component={router.notFound} />}
    </Switch>
  );
};
