import React from "react";
import { RouterWrapper } from "src/utils/RouterComponent";

import { Users } from "src/modules/users/Users.component";
import { UserSelectModule } from "src/modules/users/modules/user-selected/UserSelected.module";

const router = {
  childrens: [
    {
      route: "/:id",
      component: UserSelectModule
    }
  ]
};

export const UsersModule = props => (
  <React.Fragment>
    <Users baseUrl={props.match.path} />

    <RouterWrapper router={router} {...props} />
  </React.Fragment>
);
