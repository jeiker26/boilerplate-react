import React from "react";
import { RouterWrapper } from "src/core/utils/RouterComponent";

import { UserSelect } from "src/modules/users/modules/user-selected/UserSelected.component";

const router = {
  component: UserSelect,
  childrens: []
};

export const UserSelectModule = props => <RouterWrapper router={router} {...props} />;
