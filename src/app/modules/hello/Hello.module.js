import React from "react";
import { RouterWrapper } from "src/core/routing/RouterComponent";

import { Hello } from "src/app/modules/hello/Hello.component";

const router = {
  component: Hello,
  childrens: []
};

export const HelloModule = props => <RouterWrapper router={router} {...props} />;
