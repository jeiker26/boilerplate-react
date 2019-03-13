import React from "react";
import { RouterWrapper } from "src/lib/routing/RouterComponent";

import { NotFound } from "src/app/pages/not-found/NotFound.component";

const router = {
  component: false,
  childrens: [],
  notFound: NotFound
};

export const NotFoundPage = props => <RouterWrapper router={router} {...props} />;
