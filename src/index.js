import React from "react";
import ReactDOM from "react-dom";
import "../i18n";
import { App } from "./app";

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
