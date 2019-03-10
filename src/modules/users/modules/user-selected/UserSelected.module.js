import React from "react";
import { UserSelect } from "src/modules/users/modules/user-selected/UserSelected.component";

export const UserSelectModule = props => (
  <React.Fragment>
    <UserSelect {...props} />
  </React.Fragment>
);
