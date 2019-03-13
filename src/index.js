import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "src/core/i18n"; // config i18n
import { AppModule } from "src/app/App.module";
import "./theme/styles/global.scss";

function Index() {
  return (
    <BrowserRouter>
      <AppModule />
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
