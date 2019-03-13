import React from "react";

/** Components */
import { RouterWrapper } from "src/lib/routing/RouterComponent";
import { App } from "src/app/App.component";
import { Header } from "src/app/components/header/Header";

/** Pages */
import { NotFoundPage } from "src/app/pages/not-found/NotFound.page";
import { HelloPage } from "src/app/pages/hello/Hello.page";
import { UsersPage } from "src/app/pages/users/Users.page";

const router = {
  component: App,
  childrens: [
    {
      route: "/hello",
      component: HelloPage
    },
    {
      route: "/users",
      component: UsersPage
    }
  ],
  notFound: NotFoundPage
};

export const AppPage = props => (
  <React.Fragment>
    <Header />
    <RouterWrapper {...props} router={router} />
  </React.Fragment>
);
