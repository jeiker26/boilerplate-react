import React from "react";
import { NotFound } from "src/modules/not-found/NotFound.component";

export const NotFoundModule = ({ match }) => <NotFound baseUrl={match.path} />;
