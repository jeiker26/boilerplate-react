import React from "react";
import { useTranslation } from "react-i18next";

export const App = () => {
  const [t] = useTranslation();
  return <h1>{t("init-page-text")}</h1>;
};
