import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/** Config */
import "../i18n";
import { config } from "../react.config";
import { configReactProject } from "src/utils";

/** Modules */
import { App } from "src/app.component";
import { RouterWrapper } from "src/utils/RouterComponent";
import { NotFound } from "src/modules/not-found/NotFound";
import { HelloModule } from "src/modules/hello/Hello.module";
import { UsersModule } from "src/modules/users/Users.module";

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
  notFound: NotFound
};

function AppModule() {
  const baseProject = "/";

  useEffect(() => {
    configReactProject(config);
  });

  return (
    <BrowserRouter basename={baseProject}>
      <RouterWrapper match={{ path: baseProject }} router={router} />
    </BrowserRouter>
  );
}

ReactDOM.render(<AppModule />, document.getElementById("root"));

module.hot.accept();
