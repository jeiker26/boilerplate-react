import React from "react";
import { RouterWrapper } from "src/core/utils/RouterComponent";

import { NotFound } from "src/modules/not-found/NotFound.component";

const router = {
  component: false,
  childrens: [],
  notFound: NotFound
};

export const NotFoundModule = props => <RouterWrapper router={router} {...props} />;
