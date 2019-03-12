import React from "react";
import { RouterWrapper } from "src/core/routing/RouterComponent";

import { Users } from "src/modules/users/Users.component";
import { UserSelectModule } from "src/modules/users/modules/user-selected/UserSelected.module";

const router = {
  component: Users,
  childrens: [
    {
      route: "/:id",
      component: UserSelectModule
    }
  ]
};

export const UsersModule = props => <RouterWrapper router={router} {...props} />;
