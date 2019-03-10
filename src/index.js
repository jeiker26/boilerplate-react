import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../i18n";
import { configReactProject } from "../utils";
import { config } from "../react.config";
import { Hello } from "src/Hello";

function App() {
  useEffect(() => {
    configReactProject(config);
  });

  return <Hello />;
}

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();
