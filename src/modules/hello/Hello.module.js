import React from "react";
import { Hello } from "src/modules/hello/Hello.component";

export const HelloModule = ({ match }) => <Hello baseUrl={match.path} />;
