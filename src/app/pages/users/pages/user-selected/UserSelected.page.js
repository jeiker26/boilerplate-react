import React from "react";
import { RouterWrapper } from "src/lib/routing/RouterComponent";

import { UserSelect } from "src/app/pages/users/pages/user-selected/UserSelected.component";

const router = {
  component: UserSelect,
  childrens: []
};

export const UserSelectPage = props => <RouterWrapper router={router} {...props} />;
