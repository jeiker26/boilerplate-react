import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/** Config */
import "../i18n";
import { config } from "../react.config";
import { configReactProject } from "src/utils";

/** Components */
import { RouterWrapper } from "src/utils/RouterComponent";
import { App } from "src/App.component";
import { Header } from "src/components/header/Header";

/** Modules */
import { NotFoundModule } from "src/modules/not-found/NotFound.module";
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
  notFound: NotFoundModule
};

function AppModule() {
  const baseProject = "/";

  useEffect(() => {
    configReactProject(config);
  });

  return (
    <BrowserRouter basename={baseProject}>
      <React.Fragment>
        <Header />
        <RouterWrapper match={{ path: baseProject }} router={router} />
      </React.Fragment>
    </BrowserRouter>
  );
}

ReactDOM.render(<AppModule />, document.getElementById("root"));

module.hot.accept();