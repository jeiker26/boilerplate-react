import React from "react";
import { RouterWrapper } from "src/core/utils/RouterComponent";

import { Hello } from "src/modules/hello/Hello.component";

const router = {
  component: Hello,
  childrens: []
};

export const HelloModule = props => <RouterWrapper router={router} {...props} />;
