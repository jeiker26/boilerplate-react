import React from "react";
import { RouterWrapper } from "src/lib/routing/RouterComponent";

import { Users } from "src/app/pages/users/Users.component";
import { UserSelectPage } from "src/app/pages/users/pages/user-selected/UserSelected.page";

const router = {
  component: Users,
  childrens: [
    {
      route: "/:id",
      component: UserSelectPage
    }
  ]
};

export const UsersPage = props => <RouterWrapper router={router} {...props} />;
