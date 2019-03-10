import React from "react";
import { useTranslation } from "react-i18next";

export const Hello = () => {
  const [t] = useTranslation();
  return <p data-testid="init-message">{t("welcome")}</p>;
};
