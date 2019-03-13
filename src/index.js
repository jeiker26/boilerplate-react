import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "src/lib/i18n"; // config i18n
import { AppPage } from "src/app/App.page";
import "src/theme/styles/main.scss";

function Index() {
  return (
    <BrowserRouter>
      <AppPage />
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
