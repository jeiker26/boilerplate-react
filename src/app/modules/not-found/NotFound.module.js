import React from "react";
import { RouterWrapper } from "src/core/routing/RouterComponent";

import { NotFound } from "src/app/modules/not-found/NotFound.component";

const router = {
  component: false,
  childrens: [],
  notFound: NotFound
};

export const NotFoundModule = props => <RouterWrapper router={router} {...props} />;
