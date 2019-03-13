import React from "react";
import { RouterWrapper } from "src/lib/routing/RouterComponent";

import { Hello } from "src/app/pages/hello/Hello.component";

const router = {
  component: Hello,
  childrens: []
};

export const HelloPage = props => <RouterWrapper router={router} {...props} />;
