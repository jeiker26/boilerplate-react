import React from "react";

/** Components */
import { RouterWrapper } from "src/core/routing/RouterComponent";
import { App } from "src/app/App.component";
import { Header } from "src/app/components/header/Header";

/** Modules */
import { NotFoundModule } from "src/app/modules/not-found/NotFound.module";
import { HelloModule } from "src/app/modules/hello/Hello.module";
import { UsersModule } from "src/app/modules/users/Users.module";

const router = {
  component: App,
  childrens: [
    {
      route: "/hello",
      component: HelloModule
    },
    {
      route: "/users",
      component: UsersModule
    }
  ],
  notFound: NotFoundModule
};

export const AppModule = props => (
  <React.Fragment>
    <Header />
    <RouterWrapper {...props} router={router} />
  </React.Fragment>
);
