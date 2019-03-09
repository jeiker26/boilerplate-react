import React from "react";
import { useTranslation } from "react-i18next";

export function App() {
  const [t] = useTranslation();
  return <p>{t("welcome")}</p>;
}
